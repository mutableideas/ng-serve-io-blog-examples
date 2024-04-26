import { WebhookType } from "@shared/notifications-queue-webhook-api-domain";

export type CloudTaskType<T> = {
  scheduleTime?: number;
  oidcToken?: {
    serviceAccountEmail?: string;
    audience?: string;
  }
} & WebhookType<T>;