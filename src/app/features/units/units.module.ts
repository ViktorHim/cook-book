import { NgModule } from '@angular/core';
import { UnitListComponent } from './component/unit-list/unit-list.component';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [UnitListComponent],
  imports: [CommonModule, MatChipsModule],
  exports: [UnitListComponent],
})
export class UnitsModule {}
