import { Nullable } from '@ngserveio/utilities';

export const parseClaims = <T extends object>(
  token: Nullable<string>
): Nullable<T> => {
  const claims = token?.split('.');

  if (claims?.length !== 3) {
    return null;
  }

  const parsedToken = atob(claims[1]);
  return JSON.parse(parsedToken) as T;
};
