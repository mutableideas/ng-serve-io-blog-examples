import { Injectable } from '@nestjs/common';
import { IWebhookService } from '@shared/notifications-queue-webhook-api-domain';
import { CloudTasksService } from './cloud-tasks.service';
import { IGoogleCloudTaskConfiguration } from './google-cloud-task-configuration.interface';

@Injectable()
export class CloudTaskFactory {
  protected _queueClients: Map<string, IWebhookService> = new Map();

  protected createQueueKey({ project, location, queue }: IGoogleCloudTaskConfiguration): string {
    return [ location, project, queue ].join('_');
  }

  public getClient(config: IGoogleCloudTaskConfiguration): IWebhookService {
    const clientKey = this.createQueueKey(config);
    if (this._queueClients.has(clientKey)) {
      return this._queueClients.get(clientKey) as IWebhookService;
    }

    const client = new CloudTasksService(config);
    this._queueClients.set(clientKey, client);

    return client;
  }
}