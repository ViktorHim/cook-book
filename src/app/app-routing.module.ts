import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesPageComponent } from './pages/recipes-page/recipes-page.component';
import { UnitsPageComponent } from './pages/units-page/units-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesPageComponent },
  { path: 'units', component: UnitsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
