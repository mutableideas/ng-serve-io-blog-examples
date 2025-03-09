import { isPlatformServer } from "@angular/common";
import { PLATFORM_ID, Type, inject } from "@angular/core";

/**
 * Chooses the service on the isPlatformBrowser check
 * @param browser - The browser based service
 * @param server - Server based service
 * @returns 
 */
export const platformProviderFactory = <T>(browser: Type<T>, server: Type<T>): T => {
  const platformId = inject(PLATFORM_ID);
  const platformType: Type<T> = isPlatformServer(platformId)
    ? server
    : browser;

  return inject(platformType);
}