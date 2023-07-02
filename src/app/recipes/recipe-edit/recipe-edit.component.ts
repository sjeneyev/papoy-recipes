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

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss'],
})
export class RecipeEditComponent implements OnInit {
  recipeId: number;
  editMode = false;
  recipeForm: FormGroup;
  nameFormGroup: FormGroup;
  ingredientsGroup: FormGroup;
  preparationStepsGroup: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private recipesService: RecipesService,
    private router: Router,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initForms();
  }

  initForms() {
    this.nameFormGroup = this._formBuilder.group({
      recipeName: ['', Validators.required],
    });
    this.ingredientsGroup = this._formBuilder.group([
      this._formBuilder.array([
        this._formBuilder.control('', [Validators.required]),
        this._formBuilder.control('', [Validators.required]),
      ]),
    ]);
    this.preparationStepsGroup = this._formBuilder.group({
      prepSteps: ['', Validators.required],
    });

    if (this.editMode) {
      // Populate Form values here
    }
  }

  onSubmitForm() {
    // Submit the form
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  get controls() {
    return (this.recipeForm.get('ingredientsGroup') as FormArray).controls;
  }
}
