import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PublisherService } from '@org/cloud-task-example/api/services';
import { Observable } from 'rxjs';

@Controller('publisher')
export class PublisherController {
  @Inject()
  public publisherService!: PublisherService

  @Inject()
  public configService!: ConfigService;

  @Post()
  public create(@Body() entity: { id: string }): Observable<string> {
    return this.publisherService.publish({
      id: entity.id,
      url: this.configService.get('HANDLER_URL') as string,
      data: entity
    });
  }
}
