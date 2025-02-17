import { Component, OnInit } from '@angular/core';
import { FormService } from '../../services/form.service';
import { UnitService } from 'src/app/features/units/services/unit.service';
import { Unit } from 'src/app/features/units/types/unit.type';

@Component({
  selector: 'ingredients-form-step',
  templateUrl: './ingredients-form-step.component.html',
  styleUrls: ['./ingredients-form-step.component.scss'],
})
export class IngredientsFormStepComponent implements OnInit {
  public units: Unit[] = [];

  constructor(
    public recipeFormServive: FormService,
    public unitsService: UnitService
  ) {}

  ngOnInit(): void {
    this.unitsService.getUnits().subscribe((units) => {
      if (units) {
        this.units = units;
      }
    });
  }
}
