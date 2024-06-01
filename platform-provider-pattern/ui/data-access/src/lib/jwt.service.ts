import { IJwtClaimsService, platformProviderFactory } from '@org/platform-provider-pattern/domain';
import { SessionStorageJwtService } from './local-storage-jwt.service';
import { CookieJwtService } from './cookie-jwt.service';

export const jwtClaimsService = () => platformProviderFactory<IJwtClaimsService>(
  SessionStorageJwtService,
  CookieJwtService
);
