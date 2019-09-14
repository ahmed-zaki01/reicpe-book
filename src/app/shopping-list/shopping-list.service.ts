import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {

  private ingredients: Ingredient[] = [
    new Ingredient('Bananas', 23),
    new Ingredient('Apples', 20)
  ];



  getShoppingList() {
    return this.ingredients;
  }

  addIngredient(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
  }
}
