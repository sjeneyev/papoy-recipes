import { Component, OnInit } from '@angular/core';
import { ICategory } from '../interfaces/interfaces';
import { RecipesService } from '../recipes/recipes.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  categories: ICategory[];

  constructor(private recipesService: RecipesService) {}

  ngOnInit(): void {
    this.setCategories();
  }

  setCategories(): void {
    this.recipesService.getRecipesCategories().subscribe((response) => {
      this.categories = response;
    });
  }
}
