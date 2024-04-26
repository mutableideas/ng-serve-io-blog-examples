import { CloudTasksClient } from '@google-cloud/tasks';
import { google } from '@google-cloud/tasks/build/protos/protos';
import { anyEmpty, defaultIfEmpty, isEmpty, notEmpty, Nullable, StringOrNumber } from '@ngserveio/utilities';
import { IWebhookService } from '@shared/notifications-queue-webhook-api-domain';
import { from, map, Observable } from 'rxjs';
import { CloudTaskType } from './cloud-task.type';
import { grpc } from 'google-gax';
import { IGoogleCloudTaskConfiguration } from './google-cloud-task-configuration.interface';

export class CloudTasksService implements IWebhookService {
  private _client: Nullable<CloudTasksClient> = null;
  private _clientOpts: Nullable<grpc.ClientOptions> = null;

  protected get CloudTaskClient(): CloudTasksClient {
    this._client = this._client || new CloudTasksClient(this._clientOpts as grpc.ClientOptions);
    return this._client;
  }
  
  constructor(protected taskConfig: IGoogleCloudTaskConfiguration) {
    // FOR LOCAL DEVELOPMENT
    if (!anyEmpty<StringOrNumber | undefined>(this.taskConfig.host, this.taskConfig.port)) {
      this._clientOpts = {
        port: this.taskConfig.port,
        servicePath: this.taskConfig.host,
        sslCreds: grpc.credentials.createInsecure()
      };
    }
  }
  
  private getScheduledTime(scheduleTime: Nullable<number> | undefined): Nullable<{ seconds: number}> {
    if (isEmpty(scheduleTime)) {
      return null;
    }

    return { seconds: (scheduleTime as number) / 1000 };
  }

  /**
   * 
   * @param request a webhook request that gets sent to google cloud tasks
   * The scheduleTime property should be in milliseconds
   * @returns The task name reference for the task id
   */
  public post<T>(request: CloudTaskType<T>): Observable<string> {
    const { oidcToken } = request;

    const task: google.cloud.tasks.v2.ITask = {
      name: request.id, 
      scheduleTime: this.getScheduledTime(request.scheduleTime),
      httpRequest: {
        url: request.url,
        httpMethod: 'POST',
        body: Buffer.from(JSON.stringify(request.data)).toString('base64'),
        headers: {
          ...defaultIfEmpty(request, 'headers', { }),
          'content-type': 'application/json'
        },
        oidcToken
      }
    };

    return from(this.sendTasktoQueue(task));
  }

  public removeTask(taskId: string): Observable<void> {
    return from(this.CloudTaskClient.deleteTask({
      name: taskId
    })).pipe(
      map(() => void(0))
    );
  }

  protected sendTasktoQueue(task: google.cloud.tasks.v2.ITask): Observable<string> {
    const { project, location, queue } = this.taskConfig;
    const parent = this.CloudTaskClient.queuePath(project, location, queue);
    const taskName = defaultIfEmpty<string>(task, 'name');

    if (notEmpty(taskName) && !taskName.includes(parent)) {
      task = {
        ...task,
        name: `${parent}/tasks/${task.name}`
      };
    }
  
    return from(this.CloudTaskClient.createTask({
      task,
      parent
    })).pipe(
      map(([ response ]) => response.name as string)
    );
  }
}
