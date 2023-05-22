import { Injectable } from '@angular/core';
import { ICategory } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  categories: ICategory[] = [];

  constructor() {}

  getCategories() {
    return this.categories.slice();
  }

  setRecipesCategories(categories) {
    this.categories = categories;
  }
}
