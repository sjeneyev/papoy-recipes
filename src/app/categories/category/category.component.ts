import { Component, Input, OnInit } from '@angular/core';
import { ICategory } from '../../interfaces/interfaces';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  @Input() category: ICategory;
  @Input() index: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // this.route.data.subscribe((data: Data) => {
    //   console.log(data);
    //   this.category = data['category'];
    // });
  }

  onCategorySelect() {}
}
