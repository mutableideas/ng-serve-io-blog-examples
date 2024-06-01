import { Nullable } from '@ngserveio/utilities';

export interface IJwtClaimsService {
  getClaims<T extends object>(): Nullable<T>;
  setToken(token: string): void;
}
