import { TestBed } from '@angular/core/testing';

import { CookieJwtService } from './cookie-jwt.service';

describe('CookieJwtService', () => {
  let service: CookieJwtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CookieJwtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
