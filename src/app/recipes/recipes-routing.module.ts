import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RecipesComponent } from './recipes.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { CategoryComponent } from '../categories/category/category.component';
import { recipesResolver } from './recipes.resolver';

const routes: Routes = [
  {
    path: '',
    component: RecipesComponent,
    children: [
      {
        path: 'new',
        component: RecipeEditComponent,
        resolve: [recipesResolver],
      },
      { path: ':id', component: CategoryComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipesRoutingModule {}
