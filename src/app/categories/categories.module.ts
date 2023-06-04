import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CategoriesComponent } from './categories.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryComponent } from './category/category.component';
import { RouterModule } from '@angular/router';
import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    CategoriesComponent,
    CategoryListComponent,
    CategoryComponent,
    CategoryDetailComponent,
  ],
  imports: [SharedModule, RouterModule, CategoriesRoutingModule, MatCardModule],
})
export class CategoriesModule {}
