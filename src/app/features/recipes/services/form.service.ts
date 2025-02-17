import { Injectable } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Recipe } from '../types/recipe.type';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  public recipeNameFormGroup!: FormGroup<{ name: FormControl<string | null> }>;
  public ingredientsFormGroup!: FormGroup<{
    ingredients: FormArray<
      FormGroup<{
        name: FormControl<string | null>;
        quantity: FormControl<number | null>;
        unit: FormControl<string | null>;
      }>
    >;
  }>;
  public instructionsFormGroup!: FormGroup<{
    instructions: FormArray<FormControl<string | null>>;
  }>;

  private maxLen = 50;
  private minLen = 3;

  constructor(private formBuilder: FormBuilder) {
    this.recipeNameFormGroup = this.formBuilder.group({
      name: this.formBuilder.control<string | null>('', [
        Validators.required,
        Validators.minLength(this.minLen),
        Validators.maxLength(this.maxLen),
      ]),
    });

    this.ingredientsFormGroup = this.formBuilder.group({
      ingredients: this.formBuilder.array<
        FormGroup<{
          name: FormControl<string | null>;
          quantity: FormControl<number | null>;
          unit: FormControl<string | null>;
        }>
      >([]),
    });

    this.instructionsFormGroup = this.formBuilder.group({
      instructions: this.formBuilder.array<FormControl<string | null>>([]),
    });
    this.initForms();
  }

  get ingredientsFormArray(): FormArray<
    FormGroup<{
      name: FormControl<string | null>;
      quantity: FormControl<number | null>;
      unit: FormControl<string | null>;
    }>
  > {
    return this.ingredientsFormGroup.get('ingredients') as FormArray<
      FormGroup<{
        name: FormControl<string | null>;
        quantity: FormControl<number | null>;
        unit: FormControl<string | null>;
      }>
    >;
  }

  get instructionsFormArray(): FormArray<FormControl<string | null>> {
    return this.instructionsFormGroup.get('instructions') as FormArray<
      FormControl<string | null>
    >;
  }

  public createIngredient(): FormGroup<{
    name: FormControl<string | null>;
    quantity: FormControl<number | null>;
    unit: FormControl<string | null>;
  }> {
    return this.formBuilder.group({
      name: this.formBuilder.control<string | null>('', [
        Validators.required,
        Validators.minLength(this.minLen),
        Validators.maxLength(this.maxLen),
      ]),
      quantity: this.formBuilder.control<number | null>(null, [
        Validators.required,
        Validators.min(0.01),
      ]),
      unit: this.formBuilder.control<string | null>('', [Validators.required]),
    });
  }

  public addIngredient(): void {
    this.ingredientsFormArray.push(this.createIngredient());
  }

  public removeIngredient(index: number): void {
    this.ingredientsFormArray.removeAt(index);
  }

  public createInstruction(): FormControl<string | null> {
    return this.formBuilder.control<string | null>('', Validators.required);
  }

  public addInstruction(): void {
    this.instructionsFormArray.push(this.createInstruction());
  }

  public removeInstruction(index: number): void {
    this.instructionsFormArray.removeAt(index);
  }

  public isFormValid(): boolean {
    if (this.ingredientsFormArray.length === 0) {
      return false;
    }

    if (this.instructionsFormArray.length === 0) {
      return false;
    }

    return (
      this.recipeNameFormGroup.valid &&
      this.ingredientsFormGroup.valid &&
      this.instructionsFormGroup.valid
    );
  }

  public clearForms(): void {
    this.ingredientsFormArray.clear();
    this.instructionsFormArray.clear();

    this.recipeNameFormGroup.reset();
    this.ingredientsFormGroup.reset();
    this.instructionsFormGroup.reset();
  }

  public initForms(): void {
    this.ingredientsFormArray.push(this.createIngredient());
    this.instructionsFormArray.push(this.createInstruction());
  }

  public getRecipe(): Recipe {
    const newRecipe: Recipe = {
      name: this.recipeNameFormGroup.value.name!,
      ingredients: this.ingredientsFormArray.value.map((ingredientGroup) => ({
        name: ingredientGroup.name!,
        quantity: ingredientGroup.quantity!,
        unit: { value: ingredientGroup.unit! },
      })),
      instructions: this.instructionsFormArray.value.map(
        (instructionControl) => ({ description: instructionControl! })
      ),
    };

    return newRecipe;
  }
}
