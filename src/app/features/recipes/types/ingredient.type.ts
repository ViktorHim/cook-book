import { Unit } from '../../units/types/unit.type';

export interface Ingredient {
  name: string;
  count: number;
  unit: Unit;
}

export interface TableIngredient {
  number: number;
  name: string;
  count: number;
  unit: Unit;
}
