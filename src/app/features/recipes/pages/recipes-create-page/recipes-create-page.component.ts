import { Component } from '@angular/core';
import { Recipe } from '../../types/recipe.type';
import { RecipeService } from '../../services/recipe.service';
import { FormService } from '../../services/form.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipes-create-page',
  templateUrl: './recipes-create-page.component.html',
  styleUrls: ['./recipes-create-page.component.scss'],
})
export class RecipesCreatePageComponent {
  public isEditMode = false;
  private recipeId: string | null = null;
  private recipe: Recipe | null = null;

  constructor(
    public recipeFormService: FormService,
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.paramMap.subscribe((params) => {
      this.recipeId = params.get('id');
      this.isEditMode = !!this.recipeId;

      if (this.isEditMode) {
        this.recipeService.getRecipeById(this.recipeId!).subscribe((recipe) => {
          this.recipe = recipe;
          this.init();
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

  public onSubmit(): void {
    if (this.recipeFormService.isFormValid()) {
      const newRecipe = this.recipeFormService.getRecipe();
      newRecipe.createdAt = this.recipe?.createdAt;

      if (this.isEditMode) {
        this.recipeService.updateRecipe(this.recipeId!, newRecipe).then(() => {
          this.router.navigate(['/recipes', this.recipeId!]);
          this.recipeFormService.clearForms();
        });
      } else {
        this.recipeService.addRecipe(newRecipe).then((id) => {
          this.router.navigate(['/recipes', id]);
          this.recipeFormService.clearForms();
        });
      }
    } else {
      alert('Пожалуйста, заполните все необходимые поля!');
    }
  }
}
