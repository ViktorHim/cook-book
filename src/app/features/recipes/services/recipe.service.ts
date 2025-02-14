import { Injectable } from '@angular/core';
import { RawRecipe, Recipe } from '../types/recipe.type';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { FirestoreCollections } from 'src/config/firestore.config';
import { RecipeMapper } from '../lib/RecipeMapper';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipeMapper = new RecipeMapper();

  constructor(private firestore: AngularFirestore) {}

  getRecipes(): Observable<Recipe[] | null> {
    return this.firestore
      .collection<RawRecipe>(FirestoreCollections.RECIPES)
      .valueChanges({ idField: 'id' })
      .pipe(
        map((rawRecipes) =>
          rawRecipes.map((rawRecipe) => this.recipeMapper.toData(rawRecipe))
        ),
        catchError((error) => {
          console.log('Failed to fetch recipes: ', error);
          return of(null);
        })
      );
  }

  getRecipeById(id: string): Observable<Recipe | null> {
    return this.firestore
      .collection<RawRecipe>(FirestoreCollections.RECIPES)
      .doc(id)
      .valueChanges({ idField: 'id' })
      .pipe(
        map((rawRecipe) => {
          if (!rawRecipe) {
            return null;
          }

          return this.recipeMapper.toData(rawRecipe);
        }),
        catchError((error) => {
          console.log(`Failed to fetch recipe with ${id}`, error);

          return of(null);
        })
      );
  }

  addRecipe(recipe: Recipe): Promise<string> {
    const rawRecipe = this.recipeMapper.fromData({
      ...recipe,
      createdAt: new Date(),
    });

    return this.firestore
      .collection<RawRecipe>(FirestoreCollections.RECIPES)
      .add(rawRecipe)
      .then((docRef) => docRef.id);
  }

  updateRecipe(id: string, recipe: Partial<Recipe>): Promise<void> {
    const rawRecipe = this.recipeMapper.fromPartialData(recipe);

    return this.firestore
      .collection<RawRecipe>(FirestoreCollections.RECIPES)
      .doc(id)
      .update(rawRecipe);
  }

  deleteRecipe(id: string): Promise<void> {
    return this.firestore
      .collection<RawRecipe>(FirestoreCollections.RECIPES)
      .doc(id)
      .delete();
  }
}
