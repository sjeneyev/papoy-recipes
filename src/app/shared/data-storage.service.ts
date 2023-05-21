import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { ICategory } from '../interfaces/interfaces';
import { environment as env } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { RecipesService } from '../recipes/recipes.service';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipesService: RecipesService
  ) {}

  fetchRecipesCategories(): Observable<ICategory[]> {
    return this.http
      .get<ICategory[]>(`${env.dataEndpoint}/categories.json`)
      .pipe(
        tap((categories) => {
          this.recipesService.setRecipesCategories(categories);
        })
      );
  }

  fetchRecipe() {}
}
