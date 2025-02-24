import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../types/recipe.type';
import { TableIngredient } from '../../types/ingredient.type';
import { TableInstruction } from '../../types/instruction.type';
import { LoaderService } from 'src/app/core/services/loader.service';

@Component({
  selector: 'recipes-details-page',
  templateUrl: './recipes-details-page.component.html',
  styleUrls: ['./recipes-details-page.component.scss'],
})
export class RecipesDetailsPageComponent implements OnInit, OnDestroy {
  private routeSub?: Subscription;
  public id: string | null = null;
  public recipe?: Recipe;
  public isLoading$ = this.loaderService.isLoading$;

  constructor(
    private route: ActivatedRoute,
    private recipesService: RecipeService,
    private loaderService: LoaderService
  ) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.getRecipe();
    });
  }
  ngOnDestroy(): void {
    this.routeSub?.unsubscribe();
  }

  public getIngredients(): TableIngredient[] {
    return this.recipe!.ingredients.map((ingredient, index) => ({
      ...ingredient,
      number: index + 1,
    }));
  }

  public getInstructions(): TableInstruction[] {
    return this.recipe!.instructions.map((instruction, index) => ({
      ...instruction,
      number: index + 1,
    }));
  }

  private getRecipe(): void {
    this.loaderService.show();
    if (this.id) {
      this.recipesService.getRecipeById(this.id).subscribe((recipe) => {
        if (recipe) {
          this.recipe = recipe;
        }
        this.loaderService.hide();
      });
    }
  }
}
