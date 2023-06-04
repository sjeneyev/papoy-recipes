import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ICategory } from '../interfaces/interfaces';
import { environment as env } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { CategoriesService } from '../categories/categories.service';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private categoriesService: CategoriesService
  ) {}

  fetchCategories(): Observable<ICategory[]> {
    return this.http
      .get<ICategory[]>(`${env.dataEndpoint}/categories.json`)
      .pipe(
        tap((categories) => {
          this.categoriesService.setCategories(categories);
        })
      );
  }

  fetchRecipe() {
    const test = [new Recipe('test', ['step1, step2'], 'none', [])];
    return test;
  }
}
