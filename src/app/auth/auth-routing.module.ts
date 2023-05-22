import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { loggedInGuard } from './guards/logged-in.guard';

const authRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    canActivate: [loggedInGuard],
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'signup',
    canActivate: [loggedInGuard],
    component: SignupComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
