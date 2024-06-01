import { InjectionToken } from "@angular/core";
import { IJwtClaimsService } from "./jwt-service.interface";

export const JWT_COOKIE_NAME = 'JWT_COOKIE';
export const CLAIMS_SERVICE = new InjectionToken<IJwtClaimsService>('CLAIMS_SERVICE');