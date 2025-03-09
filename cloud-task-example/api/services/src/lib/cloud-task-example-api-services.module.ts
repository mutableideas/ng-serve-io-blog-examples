import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PUBLISHER_QUEUE } from './injection-tokens';
import { CloudTaskFactory } from '@shared/google-api-cloud-tasks';
import { PublisherService } from './publisher.service';

@Module({
  imports: [ConfigModule],
  providers: [
    CloudTaskFactory,
    {
      provide: PUBLISHER_QUEUE,
      inject: [ConfigService, CloudTaskFactory],
      useFactory: (config: ConfigService, factory: CloudTaskFactory) => {
        return factory.getClient({
          location: config.get('CLOUD_TASK_PUBLISHER_LOCATION') as string,
          project: config.get('CLOUD_TASK_PUBLISHER_PROJECT') as string,
          queue: config.get('CLOUD_TASK_PUBLISHER_QUEUE') as string,
          port: config.get('CLOUD_TASK_OPTS_PORT'),
          host: config.get('CLOUD_TASK_OPTS_HOST'),
        });
      },
    },
    PublisherService,
  ],
  exports: [
    PublisherService
  ]
})
export class CloudTaskExampleApiServicesModule {}
