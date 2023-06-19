import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Ingredient } from '../../models/ingredient.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss'],
})
export class RecipeEditComponent implements OnInit {
  recipeId: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private recipesService: RecipesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let preparationSteps = [];
    const recipeIngredients = new FormArray([]);

    this.recipeForm = this.formBuilder.group({
      recipeName: [recipeName, Validators.required],
      imagePath: [recipeImagePath],
      // description: [preparationSteps, Validators.required],
      ingredients: this.formBuilder.array([
        this.formBuilder.control(''),
        this.formBuilder.control(''),
      ]),
    });
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  get controls() {
    // a getter!
    return (this.recipeForm.get('ingredients') as FormArray).controls;
  }
}
