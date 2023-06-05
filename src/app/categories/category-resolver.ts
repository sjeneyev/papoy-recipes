import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { ICategory } from '../interfaces/interfaces';
import { CategoriesService } from './categories.service';
import { DataStorageService } from '../shared/data-storage.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CategoryResolver implements Resolve<ICategory[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private categoriesService: CategoriesService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ICategory[]> | Promise<ICategory[]> | ICategory[] {
    const categories = this.categoriesService.getCategories();
    if (categories.length === 0) {
      return this.dataStorageService.fetchCategories();
    } else {
      return categories;
    }
  }
}
