import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

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
    const preparationSteps = new FormArray([]);
    const recipeIngredients = new FormArray([]);
    this.recipeForm = new FormGroup({
      recipeName: new FormControl(recipeName, [Validators.required]),
      imagePath: new FormControl(recipeImagePath, []),
      ingredients: recipeIngredients,
      prepSteps: preparationSteps,
    });
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  get controls() {
    return (this.recipeForm.get('ingredients') as FormArray).controls;
  }

  handleFileInput(event) {
    const file = event.target.files[0];
    console.log(file);
  }
}
