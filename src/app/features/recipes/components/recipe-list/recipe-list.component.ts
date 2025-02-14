import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../types/recipe.type';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] | null = null;

  constructor(
    private recipeService: RecipeService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe((recipes) => {
      if (recipes == null) {
        this.snackBar.open('Не удалось загрузить список рецептов');
      } else {
        this.recipes = recipes;
      }
    });
  }
}
