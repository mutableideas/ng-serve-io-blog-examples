import { Inject, Injectable } from '@nestjs/common';
import { CloudTaskType, CloudTasksService } from '@shared/google-api-cloud-tasks';
import { Observable } from 'rxjs';
import { PUBLISHER_QUEUE } from './injection-tokens';

@Injectable()
export class PublisherService {
  @Inject(PUBLISHER_QUEUE)
  protected cloudTaskService!: CloudTasksService;

  /**
   * Schedules cloud tasks and returns the task id
   * @param value
   */
  public publish<T extends object>(task: CloudTaskType<T>): Observable<string> {
    return this.cloudTaskService.post<T>(task);
  }
}
