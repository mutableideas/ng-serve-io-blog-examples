import { Module } from '@nestjs/common';
import { CloudTaskExampleApiApplicationModule } from '@org/cloud-task-example-api-application';

@Module({
  imports: [
    CloudTaskExampleApiApplicationModule
  ]
})
export class AppModule { }
