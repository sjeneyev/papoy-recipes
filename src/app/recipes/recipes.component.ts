import { Component, OnInit } from '@angular/core';
import { ICategory } from '../interfaces/interfaces';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  categories: ICategory[] = [];
  constructor(private recipesService: RecipesService) {}

  ngOnInit(): void {
    this.recipesService.getRecipesCategories().subscribe((response) => {
      this.categories = response;
    });
  }
}
