import { Component, OnInit } from '@angular/core';
import { ICategory } from '../interfaces/interfaces';
import { RecipesService } from '../recipes/recipes.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  categories: ICategory[];

  constructor(
    private authService: AuthService,
    private recipesService: RecipesService
  ) {}

  ngOnInit(): void {
    this.setCategories();
  }

  setCategories(): void {
    this.recipesService.getRecipesCategories().subscribe((response) => {
      this.categories = response;
    });
  }

  onLogout(): void {
    this.authService.logout();
  }

  onAddCategory(): void {
    console.log('From onAddCategory()');
  }

  onAddRecipe(): void {
    console.log('From onAddRecipe()');
  }
}
