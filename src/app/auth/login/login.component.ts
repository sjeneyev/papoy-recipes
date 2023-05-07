import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  login() {
    console.log(this.formControls.email.value, this.formControls.password.value);
    this.isLoading = true;
    const userData = {
      email: this.formControls.email.value,
      password: this.formControls.password.value,
    };

    const authObs = this.authService.login(userData);
    authObs.subscribe({
      next: (response) => {
        this.isLoading = false;
        this.router.navigate(['./home']);
      },
      error: (errorMessage) => {
        this.isLoading = false;
        if (errorMessage === 'Unauthorized') {
          this.errorMsg = 'Wrong credentials. Please try again';
          console.log(this.errorMsg);
        }
        this.errorMsg = 'אחד הפרטים שגויים';
        console.log(errorMessage);
      },
    });
  }

  get formControls() {
    return this.loginForm.controls;
  }
}
