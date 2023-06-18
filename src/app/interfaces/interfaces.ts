import { Ingredient } from '../models/ingredient.model';

export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

export interface ICategory {
  id: number;
  name: string;
  title: string;
}

export interface IRecipe {
  name: string;
  ingredients: Ingredient[];
  imagePath: string;
  preparationSteps: string[];
}
