import { DataMapper } from 'src/app/shared/lib/DataMapper';
import { Timestamp } from '@angular/fire/firestore';
import { RawRecipe, Recipe } from '../types/recipe.type';

export class RecipeMapper implements DataMapper<RawRecipe, Recipe> {
  fromData(data: Recipe): RawRecipe {
    return {
      ...data,
      createdAt: data.createdAt
        ? Timestamp.fromDate(data.createdAt)
        : undefined,
    };
  }

  fromPartialData(data: Partial<Recipe>): Partial<RawRecipe> {
    return {
      ...data,
      createdAt: data.createdAt
        ? Timestamp.fromDate(data.createdAt)
        : undefined,
    };
  }

  toData(raw: RawRecipe): Recipe {
    return {
      ...raw,
      createdAt: raw.createdAt?.toDate() ?? null,
    };
  }
}
