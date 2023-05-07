import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Subject, tap, throwError } from 'rxjs';
import { User } from '../models/user';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthResponseData } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  error = new Subject();
  isLoggedIn = false;
  private tokenExpirationTimer: any;
  user = new BehaviorSubject<User | null>(null);

  constructor(private http: HttpClient, private router: Router) {}

  login({ email, password }) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDdSMrjl6W5XnioItat9vcy-zFRYaEThNA',
        {
          email,
          password,
        }
      )
      .pipe(
        tap((response) => {
          this.handleAuthentication(
            response.email,
            response.localId,
            response.idToken,
            +response.expiresIn
          );
        }),
        catchError(AuthService.handleError)
      );
  }

  register(formData) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=',
        formData
      )
      .pipe(
        tap((response) => {
          this.handleAuthentication(
            response.email,
            response.localId,
            response.idToken,
            +response.expiresIn
          );
          this.isLoggedIn = true;
        }),
        catchError(AuthService.handleError)
      );
  }

  private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userId, token, expirationDate);
    this.user.next(user);
    this.autoLogout(expiresIn * 1000);
    localStorage.setItem('userData', JSON.stringify(user));
  }

  autoLogout(expirationDuration: number) {
    // console.log(expirationDuration);
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }

  logout() {
    this.user.next(null);
    this.router.navigate(['./auth']);
    localStorage.removeItem('userData');
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }

  static handleError(errorRes: HttpErrorResponse) {
    const errorMessage = 'An unknown error occurred!';
    if (!errorRes.error) {
      return throwError(() => new Error(errorMessage));
    }
    return throwError(errorRes.error.error);
  }
}
