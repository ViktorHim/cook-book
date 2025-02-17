import { Component } from '@angular/core';
import { Recipe } from '../../types/recipe.type';
import { RecipeService } from '../../services/recipe.service';
import { FormService } from '../../services/form.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoaderService } from 'src/app/core/services/loader.service';

@Component({
  selector: 'app-recipes-create-page',
  templateUrl: './recipes-create-page.component.html',
  styleUrls: ['./recipes-create-page.component.scss'],
})
export class RecipesCreatePageComponent {
  public isEditMode = false;
  public isLoading$ = this.loaderService.isLoading$;
  private recipeId: string | null = null;
  private recipe: Recipe | null = null;

  constructor(
    public recipeFormService: FormService,
    private recipeService: RecipeService,
    private loaderService: LoaderService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.paramMap.subscribe((params) => {
      this.recipeId = params.get('id');
      this.isEditMode = !!this.recipeId;

      if (this.isEditMode) {
        loaderService.show();
        this.recipeService.getRecipeById(this.recipeId!).subscribe((recipe) => {
          this.recipe = recipe;
          this.init();
          loaderService.hide();
        });
      } else {
        this.recipeFormService.clearForms();
        this.recipeFormService.initForms();
      }
    });
  }

  private init(): void {
    if (!this.recipe) return;

    this.recipeFormService.clearForms();

    // Заполняем название рецепта
    this.recipeFormService.recipeNameFormGroup.patchValue({
      name: this.recipe.name,
    });

    // Заполняем ингредиенты
    this.recipe.ingredients.forEach((ingredient) => {
      const ingredientGroup = this.recipeFormService.createIngredient(); // Создаём новую группу для ингредиента
      ingredientGroup.patchValue({
        name: ingredient.name,
        quantity: ingredient.quantity,
        unit: ingredient.unit.value,
      });
      this.recipeFormService.ingredientsFormArray.push(ingredientGroup);
    });

    // Заполняем инструкции
    this.recipe.instructions.forEach((instruction) => {
      const instructionControl = this.recipeFormService.createInstruction(); // Создаём новый контрол для инструкции
      instructionControl.setValue(instruction.description);
      this.recipeFormService.instructionsFormArray.push(instructionControl);
    });
  }

  public async onSubmit(): Promise<void> {
    if (!this.recipeFormService.isFormValid()) {
      alert('Пожалуйста, заполните все необходимые поля!');
      return;
    }

    const newRecipe = this.recipeFormService.getRecipe();
    if (this.isEditMode && this.recipe?.createdAt) {
      newRecipe.createdAt = this.recipe.createdAt;
    }

    this.loaderService.show();

    try {
      if (this.isEditMode) {
        await this.recipeService.updateRecipe(this.recipeId!, newRecipe);
        await this.router.navigate(['/recipes', this.recipeId!]);
      } else {
        const id = await this.recipeService.addRecipe(newRecipe);
        await this.router.navigate(['/recipes', id]);
      }
    } catch (error) {
      console.error('Ошибка при сохранении рецепта:', error);
      alert('Произошла ошибка при сохранении. Попробуйте снова.');
    } finally {
      this.loaderService.hide();
      this.recipeFormService.clearForms();
    }
  }
}
