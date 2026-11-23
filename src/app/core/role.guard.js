import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/api.services';
export const roleGuard = (route) => {
    const router = inject(Router);
    const auth = inject(AuthService);
    const allowed = route.data?.['roles'];
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
