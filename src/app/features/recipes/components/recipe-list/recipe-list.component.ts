import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../types/recipe.type';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoaderService } from 'src/app/core/services/loader.service';

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  public recipes: Recipe[] | null = null;
  public isLoading$ = this.loaderService.isLoading$;

  constructor(
    private recipeService: RecipeService,
    private snackBar: MatSnackBar,
    private loaderService: LoaderService
  ) {}

  ngOnInit(): void {
    this.loaderService.show();
    this.recipeService.getRecipes().subscribe((recipes) => {
      if (recipes == null) {
        this.snackBar.open('Не удалось загрузить список рецептов');
      } else {
        this.recipes = recipes;
      }
      this.loaderService.hide();
    });
  }
}
