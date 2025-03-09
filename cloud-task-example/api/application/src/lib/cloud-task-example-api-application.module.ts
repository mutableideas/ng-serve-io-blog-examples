import { Module } from '@nestjs/common';
import { PublisherController } from './publisher.controller';
import { CloudTaskExampleApiServicesModule } from '@org/cloud-task-example/api/services';
import { HandlerController } from './handler.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    CloudTaskExampleApiServicesModule,
    ConfigModule
  ],
  controllers: [
    PublisherController,
    HandlerController
  ],
})
export class CloudTaskExampleApiApplicationModule {}
