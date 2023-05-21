import { Component, Input } from '@angular/core';
import { ICategory } from '../../interfaces/interfaces';

@Component({
  selector: 'app-recipe-category',
  templateUrl: './recipe-category.component.html',
  styleUrls: ['./recipe-category.component.scss'],
})
export class RecipeCategoryComponent {
  @Input() recipe: ICategory;
}
