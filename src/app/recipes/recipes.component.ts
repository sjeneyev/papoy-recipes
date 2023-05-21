import { Component, OnInit } from '@angular/core';
import { ICategory } from '../interfaces/interfaces';
import { environment as env } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  categories = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<ICategory[]>(`${env.dataEndpoint}/categories.json`)
      .subscribe((response) => {
        this.categories = response;
      });
  }
}
