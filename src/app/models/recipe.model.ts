import { Ingredient } from './ingredient.model';

export class Recipe {
  constructor(
    public name: string,
    public prepSteps: string[],
    public imagePath: string,
    public ingredients: Ingredient[]
  ) {}
}
