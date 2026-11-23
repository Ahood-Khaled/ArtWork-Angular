
import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/api.services';
import { UserRole } from '../models/models';

export const roleGuard: CanActivateFn = (route) => {
  const router = inject(Router);
  const auth: AuthService = inject(AuthService);

  const allowed = route.data?.['roles'] as UserRole[] | undefined;

  if (!auth.isLoggedIn()) {
    return router.createUrlTree(['/login']);
  }

  if (!allowed || allowed.length === 0) {
    return true;
  }

  const role = auth.getRole();

  return role && allowed.includes(role)
    ? true
    : router.createUrlTree(['/']);
};
