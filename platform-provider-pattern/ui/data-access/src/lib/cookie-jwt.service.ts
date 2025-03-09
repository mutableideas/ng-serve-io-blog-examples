import { Injectable, inject } from '@angular/core';
import { Nullable } from '@ngserveio/utilities';
import {
  IJwtClaimsService,
  JWT_COOKIE_NAME,
  REQUEST,
  RESPONSE,
} from '@org/platform-provider-pattern/domain';
import { parseClaims } from './token-claims.helper';

@Injectable({
  providedIn: 'root',
})
export class CookieJwtService implements IJwtClaimsService {
  protected readonly request = inject(REQUEST, {
    optional: true,
  });

  protected readonly response = inject(RESPONSE, {
    optional: true
  });

  getClaims<T extends object>(): Nullable<T> {
    const token = this.request?.cookies[JWT_COOKIE_NAME];
    return parseClaims<T>(token);
  }

  setToken(token: string): void {
    this.response?.cookie(JWT_COOKIE_NAME, token);
  }
}
