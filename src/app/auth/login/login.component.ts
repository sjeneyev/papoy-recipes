import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  isLoading = false;
  errorMsg: string;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.minLength(2)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  constructor(private authService: AuthService, private router: Router) {}

  get formControls() {
    return this.loginForm.controls;
  }

  login() {
    this.isLoading = true;
    const userData = {
      email: this.formControls.email.value,
      password: this.formControls.password.value,
    };

    const authObs = this.authService.login(userData);
    authObs.subscribe({
      next: (response) => {
        this.isLoading = false;

        this.router.navigate(['./recipes']);
      },
      error: (errorMessage) => {
        this.isLoading = false;
        if (errorMessage === 'Unauthorized') {
          this.errorMsg = 'Wrong credentials. Please try again';
        }
        this.errorMsg = 'אחד הפרטים שגויים';
      },
    });
  }
}
