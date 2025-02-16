import { Component, Input } from '@angular/core';
import { TableInstruction } from '../../types/instruction.type';

@Component({
  selector: 'instructions-table',
  templateUrl: './instructions-table.component.html',
  styleUrls: ['./instructions-table.component.scss'],
})
export class InstructionsTableComponent {
  @Input() instructions!: TableInstruction[];

  readonly columns: string[] = ['number', 'description'];
}
