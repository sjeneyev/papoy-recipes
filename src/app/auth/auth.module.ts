import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthRoutingModule } from './auth-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [LoginComponent, SignupComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AuthRoutingModule,
        SharedModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
    ],
})
export class AuthModule {}
