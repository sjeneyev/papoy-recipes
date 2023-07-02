import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { inject } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Observable } from 'rxjs';
import { IRecipe } from '../interfaces/interfaces';
import { RecipesService } from './recipes.service';

export const recipesResolver: ResolveFn<IRecipe[]> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<IRecipe[]> | Promise<IRecipe[]> | IRecipe[] => {
  const service: RecipesService = inject(RecipesService);
  const dataService: DataStorageService = inject(DataStorageService);
  const recipes: IRecipe[] = service.getRecipes();

  if (recipes.length === 0) {
    return dataService.fetchRecipes();
  } else {
    return recipes;
  }
};
