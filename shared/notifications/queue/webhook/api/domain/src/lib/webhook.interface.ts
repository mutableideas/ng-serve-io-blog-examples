import { Observable } from "rxjs";

export type WebhookType<T> = {
  id: string;
  url: string;
  headers?: Record<string, string>;
  data?: T;
  method?: 'GET' | 'PUT' | 'POST' | 'DELETE'
}

export interface IWebhookService {
  post<T>(data: WebhookType<T>): Observable<unknown>;
}
