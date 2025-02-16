import { Timestamp } from '@angular/fire/firestore';
import { Ingredient } from './ingredient.type';
import { Instruction } from './instruction.type';

export interface Recipe {
  id?: string;
  name: string;
  instructions: Instruction[];
  ingredients: Ingredient[];
  createdAt: Date | null;
}

export interface RawRecipe {
  id?: string;
  name: string;
  instructions: Instruction[];
  ingredients: Ingredient[];
  createdAt?: Timestamp;
}
