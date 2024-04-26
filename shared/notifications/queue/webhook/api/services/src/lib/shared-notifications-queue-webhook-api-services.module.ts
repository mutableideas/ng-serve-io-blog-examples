import { DynamicModule, Module, Provider, Type } from '@nestjs/common';
import {
  IWebhookService
} from '@shared/notifications-queue-webhook-api-domain';

@Module({})
export class SharedNotificationsQueueWebhookApiServicesModule {
  public static configure(
    webhookServices: Record<string, Type<IWebhookService>>
  ): DynamicModule {
    const providers: Provider[] = Object.keys(webhookServices).map(key => {
      return {
        provide: key,
        useClass: webhookServices[key]
      } as Provider;
    });

    return {
      module: SharedNotificationsQueueWebhookApiServicesModule,
      providers
    };
  }
}
