import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  error = new Subject();
  isLoggedIn = false;
  user = new BehaviorSubject<User | null>(null);

  constructor() {}
}
