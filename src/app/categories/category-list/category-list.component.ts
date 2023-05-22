import { Component, OnInit } from '@angular/core';
import { ICategory } from '../../interfaces/interfaces';
import { DataStorageService } from '../../shared/data-storage.service';
import { RecipesService } from '../../recipes/recipes.service';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent implements OnInit {
  categories: ICategory[] = [];

  constructor(
    private dataService: DataStorageService,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.dataService
      .fetchCategories()
      .subscribe(
        () => (this.categories = this.categoriesService.getCategories())
      );
  }
}
