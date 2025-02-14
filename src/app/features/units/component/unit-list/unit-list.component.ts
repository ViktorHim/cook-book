import { Component, OnInit } from '@angular/core';
import { Unit } from '../../types/unit.type';
import { UnitService } from '../../services/unit.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'unit-list',
  templateUrl: './unit-list.component.html',
  styleUrls: ['./unit-list.component.scss'],
})
export class UnitListComponent implements OnInit {
  unitList: Observable<Unit[]> | null = null;

  constructor(private unitService: UnitService) {}

  ngOnInit(): void {
    this.unitList = this.unitService.getUnits();
  }
}
