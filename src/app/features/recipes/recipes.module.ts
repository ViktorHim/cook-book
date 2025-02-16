import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeItemComponent } from './components/recipe-item/recipe-item.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeFormComponent } from './components/recipe-form/recipe-form.component';
import { DeleteConfirmationDialogComponent } from './components/delete-confirmation-dialog/delete-confirmation-dialog.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { RecipesListPageComponent } from './pages/recipes-list-page/recipes-list-page.component';
import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesDetailsPageComponent } from './pages/recipes-details-page/recipes-details-page.component';
import { RecipesEditPageComponent } from './pages/recipes-edit-page/recipes-edit-page.component';
import { RecipesCreatePageComponent } from './pages/recipes-create-page/recipes-create-page.component';

@NgModule({
  declarations: [
    RecipeItemComponent,
    RecipeListComponent,
    RecipeFormComponent,
    RecipesListPageComponent,
    DeleteConfirmationDialogComponent,
    RecipesDetailsPageComponent,
    RecipesEditPageComponent,
    RecipesCreatePageComponent,
  ],
  imports: [
    CommonModule,
    RecipesRoutingModule,

    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatTooltipModule,
    MatMenuModule,
    MatSnackBarModule,
    MatDividerModule,
    MatDialogModule,
  ],
})
export class RecipesModule {}
