export interface IGoogleCloudTaskConfiguration {
  project: string;
  location: string;
  queue: string;
  host?: string;
  port?: number;
}