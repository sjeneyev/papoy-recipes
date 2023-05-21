import { Component, OnInit } from '@angular/core';
import { ICategory } from '../interfaces/interfaces';
import { RecipesService } from './recipes.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  categories: ICategory[] = [];
  constructor(
    private dataService: DataStorageService,
    private recipesService: RecipesService
  ) {}

  ngOnInit(): void {
    this.dataService
      .fetchRecipesCategories()
      .subscribe(
        () => (this.categories = this.recipesService.getRecipesCategories())
      );
  }
}
