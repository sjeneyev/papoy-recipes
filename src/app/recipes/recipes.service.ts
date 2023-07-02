import { Injectable } from '@angular/core';
import { IRecipe } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  recipes: IRecipe[] = [];

  getRecipes(): IRecipe[] {
    return this.recipes.slice();
  }

  setRecipes(recipes) {
    this.recipes = recipes;
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }
}
