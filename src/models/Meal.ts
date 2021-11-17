import { IDatabaseFields } from './Common';

export type IngredientMeasureWay = 'cups' | 'reap' | 'liters' | 'grams';

export interface IMeal extends IDatabaseFields {
  name: string;
  ingredients: IIngredient[];
  cover_image?: string;
}

export interface IIngredient {
  name: string;
  quantity?: string;
  measure?: IngredientMeasureWay;
}
