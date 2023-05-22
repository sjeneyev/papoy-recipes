import { Injectable } from '@angular/core';
import { ICategory } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor() {}
  categories: ICategory[] = [];

  getCategories() {
    return this.categories.slice();
  }

  setRecipesCategories(categories) {
    this.categories = categories;
  }
}
