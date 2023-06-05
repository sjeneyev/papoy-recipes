import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { map, take } from 'rxjs';
import { AuthService } from '../auth.service';

export const loggedInGuard = () => {
  const router = inject(Router);
  const authService = inject(AuthService);

  return authService.user.pipe(
    take(1),
    map((user) => {
      const isAuth = !!user;
      if (!isAuth) {
        return true;
      }
      return router.navigate(['./categories']);
    })
  );
};
