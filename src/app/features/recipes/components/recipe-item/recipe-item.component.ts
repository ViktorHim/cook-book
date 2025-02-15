import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../types/recipe.type';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmationDialogComponent } from '../delete-confirmation-dialog/delete-confirmation-dialog.component';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent {
  constructor(
    private dialog: MatDialog,
    private recipeService: RecipeService
  ) {}

  @Input() recipe!: Recipe;

  openRemoveDialog() {
    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent, {
      data: { recipeName: this.recipe.name },
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((confirmation) => {
      if (confirmation) {
        this.recipeService.deleteRecipe(this.recipe.id!);
      }
    });
  }
}
