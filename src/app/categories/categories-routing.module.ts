import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { categoryResolver } from './category-resolver';

const routes: Routes = [
  {
    path: '',
    component: CategoryListComponent,
  },
  {
    path: ':id',
    component: CategoryDetailComponent,
    resolve: { category: categoryResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriesRoutingModule {}
