import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SessionService } from '../services/session.service';

export const authGuard: CanActivateFn = async () => {

  const sessionService = inject(SessionService);
  const router = inject(Router);

  const role = await sessionService.getRole();

  if (role) {
    return true;
  }

  return router.parseUrl('/login');

};