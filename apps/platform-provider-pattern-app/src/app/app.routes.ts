import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '', 
    loadComponent: () => import('@org/platform-provider-pattern/ui/jwt-feature').then(
      m => m.LoginComponent
    )
  },
  {
    path: 'role',
    loadComponent: () => import('@org/platform-provider-pattern/ui/jwt-feature').then(
      m => m.RoleComponent
    )
  }
];
