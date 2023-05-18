import { Component, OnInit } from '@angular/core';
import { ICategory } from '../interfaces/interfaces';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  categories: ICategory[];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.setCategories();
  }

  setCategories() {
    this.http
      .get<ICategory[]>(`${env.dataEndpoint}/categories.json`)
      .subscribe((response) => {
        this.categories = response;
      });
  }
}
