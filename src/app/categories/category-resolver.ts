import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';
import { ICategory } from '../interfaces/interfaces';
import { inject } from '@angular/core';
import { CategoriesService } from './categories.service';
import { Observable } from 'rxjs';

export const categoryResolver: ResolveFn<ICategory[]> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<ICategory[]> | Promise<ICategory[]> | ICategory[] => {
  const service: CategoriesService = inject(CategoriesService);
  const dataService: DataStorageService = inject(DataStorageService);
  const categories: ICategory[] = service.getCategories();
  if (categories.length === 0) {
    return dataService.fetchCategories();
  } else {
    return categories;
  }
};
