import { Observable } from 'rxjs';

export type SseConnection = {
  status: 'CONNECTING' | 'OPEN' | 'CLOSED',
  data:
}

/**
 * Listens to an EventSource parsing the response data
 * and listening to the eventTypes provided
 * @param url - The SSE url
 * @param eventTypes - The types of events broadcasted from the SSE URL
 * @returns Observable<T>
 */
export function connectSse<T>(url: string, eventTypes: string[] = ['message']): Observable<T> {
  return new Observable(subscriber => {
    const eventSource = new EventSource(url);

    const parseMessage = (message: MessageEvent<string>) => {
      subscriber.next(JSON.parse(message.data))
    }

    eventSource.onerror = (evt:Event) => {
      subscriber.error(evt);
    };

    eventSource.onopen = () => {

    };

    eventTypes.forEach(eventType =>
      eventSource.addEventListener(eventType, parseMessage)
    );

    return () => {
      eventTypes.forEach(eventType =>
        eventSource.removeEventListener(eventType, parseMessage)
      );
      eventSource.close();
    };
  });
}
