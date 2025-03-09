import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { jwtTokenProvider } from './jwt-token.provider';
import { Observable, map, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  protected httpClient = inject(HttpClient);
  protected jwtClaimsService = jwtTokenProvider();

  public login(): Observable<string> {
    return this.httpClient.get<{ jwt: string }>('/login').pipe(
      take(1),
      tap(value  => {
        this.jwtClaimsService.setToken(value.jwt);
      }),
      map(({ jwt }) => jwt)
    );
  }
}
