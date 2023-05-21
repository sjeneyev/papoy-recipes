import { Injectable } from '@angular/core';
import { ICategory } from '../interfaces/interfaces';
import { environment as env } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  constructor(private http: HttpClient) {}

  getRecipesCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(`${env.dataEndpoint}/categories.json`);
  }
}
