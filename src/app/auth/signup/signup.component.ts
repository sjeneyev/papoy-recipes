import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponseData } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  error = null;
  isLoading = false;
  validFirstName = false;
  validLastname = true;
  validEmail = true;

  public passwordValidatePattern: RegExp = /^(?=.*[a-zA-Z])(?=.*[0-9])/;

  signupForm = this.formBuilder.group({
    firstName: [null, [Validators.required, Validators.minLength(2)]],
    lastName: [null, [Validators.required, Validators.minLength(2)]],
    email: [null, [Validators.required, Validators.email]],
    password: [
      null,
      [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(this.passwordValidatePattern),
      ],
    ],
    confirmPassword: [
      null,
      [Validators.required],
      this.confirmPassword.bind(this),
    ],
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  get formControls() {
    return this.signupForm.controls;
  }

  signup(): void {
    this.isLoading = true;
    // this.validEmail = true;

    const userData = {
      firstName: this.formControls.firstName.value,
      lastName: this.formControls.lastName.value,

      email: this.formControls.email.value,
      password: this.formControls.password.value,
      password_confirmation: this.formControls.confirmPassword.value,
    };

    let authObs: Observable<AuthResponseData>;
    authObs = this.authService.register(userData);

    authObs.subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigate(['./categories']);
      },
      error: (errorMessage) => {
        this.isLoading = false;
        if (errorMessage === 'USER_EXISTS') {
          this.formControls.email.setErrors({ incorrect: true });
          // this.validUsername = false;
        }
        if (errorMessage === 'EMAIL_IN_USE') {
          this.formControls.email.setErrors({ incorrect: true });
          this.validEmail = false;
        }
      },
    });
  }

  confirmPassword(control: FormControl): Promise<any> {
    return new Promise((resolve) => {
      if (control.value !== this.signupForm.value.password) {
        this.formControls.confirmPassword.setErrors({
          incorrect: true,
        });
        resolve({ unconfirmedPassword: true });
      } else {
        resolve(null);
      }
    });
  }

  getErrorMessage(control: FormControl) {
    if (control.hasError('required')) {
      return 'שדה חובה';
    }

    if (control.hasError('minlength')) {
      return `חייב להכיל לפחות ${control.errors['minlength'].requiredLength} תווים`;
    }

    if (control.hasError('email')) {
      return 'כתובת מייל לא חוקית';
    }

    if (control.hasError('pattern')) {
      return 'סיסמה חלשה מדי';
    }

    if (control.hasError('unconfirmedPassword')) {
      return 'סיסמה לא תואמת';
    }

    return 'משהו השתבש';
  }
}
