import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ICategory, IRecipe } from '../interfaces/interfaces';
import { environment as env } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { CategoriesService } from '../categories/categories.service';
import { Recipe } from '../models/recipe.model';
import { RecipesService } from '../recipes/recipes.service';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private categoriesService: CategoriesService,
    private recipesService: RecipesService
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

  fetchCategory() {}

  fetchRecipes(): Observable<IRecipe[]> {
    return this.http.get<IRecipe[]>(`${env.dataEndpoint}/recipes.json`).pipe(
      tap((recipes: IRecipe[]) => {
        this.recipesService.setRecipes(recipes);
      })
    );
  }

  fetchRecipe() {
    return [new Recipe('test', ['step1, step2'], 'none', [])];
  }
}
