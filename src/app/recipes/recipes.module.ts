import { NgModule } from '@angular/core';
import { RecipesComponent } from './recipes.component';
import { RecipesRoutingModule } from './recipes-routing.module';
import { RouterModule } from '@angular/router';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [RecipesComponent, RecipeEditComponent, RecipesListComponent],
  imports: [SharedModule, RouterModule, RecipesRoutingModule],
})
export class RecipesModule {}
