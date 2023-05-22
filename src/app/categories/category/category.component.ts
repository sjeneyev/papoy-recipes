import { Component, Input } from '@angular/core';
import { ICategory } from '../../interfaces/interfaces';

@Component({
  selector: 'app-recipe-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent {
  @Input() category: ICategory;
  @Input() index: number;
}
