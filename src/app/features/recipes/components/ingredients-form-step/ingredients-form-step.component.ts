import { Component } from '@angular/core';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'ingredients-form-step',
  templateUrl: './ingredients-form-step.component.html',
  styleUrls: ['./ingredients-form-step.component.scss'],
})
export class IngredientsFormStepComponent {
  constructor(public recipeFormServive: FormService) {}
}
