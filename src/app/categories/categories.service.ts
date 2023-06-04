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

  setCategories(categories) {
    this.categories = categories;
  }

  getCategory(index: number): ICategory {
    console.log(this.categories[index]);
    return this.categories[index];
  }
}
