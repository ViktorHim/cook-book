import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormService } from '../../services/form.service';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'instructions-form-step',
  templateUrl: './instructions-form-step.component.html',
  styleUrls: ['./instructions-form-step.component.scss'],
})
export class InstructionsFormStepComponent {
  @Output() onSubmit = new EventEmitter<void>();
  @Input() isEdit!: boolean;

  constructor(public recipeFormService: FormService) {}

  handleClick(): void {
    this.onSubmit.emit();
  }
}
