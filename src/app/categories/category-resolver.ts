import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { ICategory } from '../interfaces/interfaces';
import { inject } from '@angular/core';
import { CategoriesService } from './categories.service';

export const CategoryResolver: ResolveFn<ICategory> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return inject(CategoriesService).getCategory(+route.paramMap.get('id'));
};
