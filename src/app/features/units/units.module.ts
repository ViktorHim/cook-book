import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { UnitListComponent } from './component/unit-list/unit-list.component';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { UnitsPageComponent } from './pages/units-page/units-page.component';
import { UnitsRoutingModule } from './units-routing.module';

@NgModule({
  declarations: [UnitListComponent, UnitsPageComponent],
  imports: [CommonModule, UnitsRoutingModule, MatChipsModule, MatCardModule],
  exports: [UnitListComponent],
})
export class UnitsModule {}
