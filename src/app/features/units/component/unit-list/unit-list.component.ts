import { Component, OnInit } from '@angular/core';
import { Unit } from '../../types/unit.type';
import { UnitService } from '../../services/unit.service';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoaderService } from 'src/app/core/services/loader.service';

@Component({
  selector: 'unit-list',
  templateUrl: './unit-list.component.html',
  styleUrls: ['./unit-list.component.scss'],
})
export class UnitListComponent implements OnInit {
  public unitList: Unit[] = [];
  public isLoading$ = this.loaderService.isLoading$;

  constructor(
    private unitService: UnitService,
    private loaderService: LoaderService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loaderService.show();
    this.unitService.getUnits().subscribe((units) => {
      if (units == null) {
        this.snackBar.open('Не удалось загрузить список рецептов');
      } else {
        this.unitList = units;
      }
      this.loaderService.hide();
    });
  }
}
