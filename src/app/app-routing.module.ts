import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth/guards/auth.guard';

const appRoutes: Routes = [
  { path: '', redirectTo: '/categories', pathMatch: 'full' },
  { path: 'home', redirectTo: '/categories', pathMatch: 'full' },

  {
    path: 'categories',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./categories/categories.module').then((m) => m.CategoriesModule),
  },
  {
    path: 'recipes',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./recipes/recipes.module').then((m) => m.RecipesModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
