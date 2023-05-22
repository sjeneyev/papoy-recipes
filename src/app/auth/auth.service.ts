import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Subject, tap, throwError } from 'rxjs';
import { User } from '../models/user';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthResponseData } from '../interfaces/interfaces';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  error = new Subject();
  isLoggedIn = false;
  user = new BehaviorSubject<User | null>(null);
  private tokenExpirationTimer: any;

  constructor(private http: HttpClient, private router: Router) {}

  static handleError(errorRes: HttpErrorResponse) {
    const errorMessage = 'An unknown error occurred!';
    if (!errorRes.error) {
      return throwError(() => new Error(errorMessage));
    }
    return throwError(() => new Error(errorRes.error.error));
  }

  login({ email, password }) {
    return this.http
      .post<AuthResponseData>(
        `${env.authEndpoint}:signInWithPassword?key=${env.apiKey}`,
        {
          email,
          password,
          returnSecureToken: true,
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

  autoLogin() {
    const userData: {
      email: string;
      userId: string;
      _token: string;
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('userData') || '{}');

    if (!userData) {
      return;
    }

    const loadedUser = new User(
      userData.email,
      userData.userId,
      userData._token,
      new Date(userData._tokenExpirationDate)
    );

    if (loadedUser.token) {
      this.user.next(loadedUser);
      const expirationDuration =
        new Date(userData._tokenExpirationDate).getTime() -
        new Date().getTime();
      this.autoLogout(expirationDuration);
    }
  }

  register(formData) {
    formData = { ...formData, returnSecureToken: true };
    return this.http
      .post<AuthResponseData>(
        `${env.authEndpoint}:signUp?key=${env.apiKey}`,
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

  autoLogout(expirationDuration: number) {
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

  private handleAuthentication(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userId, token, expirationDate);

    this.user.next(user);
    this.autoLogout(expiresIn * 1000);
    localStorage.setItem('userData', JSON.stringify(user));
  }
}
