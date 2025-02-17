import { Unit } from '../../units/types/unit.type';

export interface Ingredient {
  name: string;
  quantity: number;
  unit: Unit;
}

export interface TableIngredient {
  number: number;
  name: string;
  quantity: number;
  unit: Unit;
}
