import { Component } from '@angular/core';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'recipe-name-form',
  templateUrl: './recipe-name-form-step.component.html',
  styleUrls: ['./recipe-name-form-step.component.scss'],
})
export class RecipeNameFormStepComponent {
  constructor(public recipeFormService: FormService) {}
}
