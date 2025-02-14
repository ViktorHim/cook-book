import { Unit } from '../../units/types/unit.type';
import { Timestamp } from '@angular/fire/firestore';

export interface Recipe {
  id?: string;
  name: string;
  description: string;
  ingredients: Ingredient[];
  createdAt: Date | null;
}

export interface RawRecipe {
  id?: string;
  name: string;
  description: string;
  ingredients: Ingredient[];
  createdAt?: Timestamp;
}

export interface Ingredient {
  name: string;
  count: number;
  unit: Unit;
}
