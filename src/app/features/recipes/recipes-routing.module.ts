import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesListPageComponent } from './pages/recipes-list-page/recipes-list-page.component';
import { RecipesDetailsPageComponent } from './pages/recipes-details-page/recipes-details-page.component';
import { RecipesEditPageComponent } from './pages/recipes-edit-page/recipes-edit-page.component';
import { RecipesCreatePageComponent } from './pages/recipes-create-page/recipes-create-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: RecipesListPageComponent },
  { path: 'create', component: RecipesCreatePageComponent },
  { path: ':id', component: RecipesDetailsPageComponent },
  { path: ':id/edit', component: RecipesEditPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipesRoutingModule {}
