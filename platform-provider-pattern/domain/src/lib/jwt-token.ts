import { InjectionToken } from "@angular/core";
import { IJwtClaimsService } from "./jwt-service.interface";

export const JWT_TOKEN = new InjectionToken<IJwtClaimsService>('JWT_TOKEN_PROVIDER');
