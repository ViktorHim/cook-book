import { Component, Input } from '@angular/core';
import { TableIngredient } from '../../types/ingredient.type';

@Component({
  selector: 'ingredients-table',
  templateUrl: './ingredients-table.component.html',
  styleUrls: ['./ingredients-table.component.scss'],
})
export class IngredientsTableComponent {
  @Input() ingredients!: TableIngredient[];

  readonly columns: string[] = ['number', 'name', 'quantity', 'unit'];
}
