import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeItemComponent } from './components/recipe-item/recipe-item.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeFormComponent } from './components/recipe-form/recipe-form.component';
import { DeleteConfirmationDialogComponent } from './components/delete-confirmation-dialog/delete-confirmation-dialog.component';
import { IngredientsTableComponent } from './components/ingredients-table/ingredients-table.component';
import { InstructionsTableComponent } from './components/instructions-table/instructions-table.component';

import { RecipesListPageComponent } from './pages/recipes-list-page/recipes-list-page.component';
import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesDetailsPageComponent } from './pages/recipes-details-page/recipes-details-page.component';
import { RecipesCreatePageComponent } from './pages/recipes-create-page/recipes-create-page.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { RecipeNameFormStepComponent } from './components/recipe-name-form-step/recipe-name-form-step.component';
import { IngredientsFormStepComponent } from './components/ingredients-form-step/ingredients-form-step.component';
import { InstructionsFormStepComponent } from './components/instructions-form-step/instructions-form-step.component';
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
  declarations: [
    RecipeItemComponent,
    RecipeListComponent,
    RecipeFormComponent,
    RecipesListPageComponent,
    DeleteConfirmationDialogComponent,
    RecipesDetailsPageComponent,
    RecipesCreatePageComponent,
    IngredientsTableComponent,
    InstructionsTableComponent,
    RecipeNameFormStepComponent,
    IngredientsFormStepComponent,
    InstructionsFormStepComponent,
  ],
  imports: [
    CommonModule,
    RecipesRoutingModule,
    ReactiveFormsModule,
    SharedModule,

    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatTooltipModule,
    MatMenuModule,
    MatSnackBarModule,
    MatDividerModule,
    MatDialogModule,
    MatTableModule,
    MatStepperModule,
    MatSelectModule,
  ],
})
export class RecipesModule {}
