import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from './shared/shared.module';
import { RecipesComponent } from './recipes/recipes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RecipeCategoryComponent } from './recipes/recipe-category/recipe-category.component';
import { RecipeComponent } from './recipes/recipe/recipe.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, RecipesComponent, RecipeCategoryComponent, RecipeComponent, RecipeEditComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
