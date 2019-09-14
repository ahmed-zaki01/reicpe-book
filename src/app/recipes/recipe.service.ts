import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Injectable()

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      "Tasty Schnitzel",
      "A super-tasty Schnitzel - just awesome!",
      "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg",
      [
        new Ingredient('meat', 2),
        new Ingredient('French Fries', 20)
      ]
    ),
    new Recipe(
      "Big Fat Burger",
      "What else you need to say?",
      "https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg",
      [
        new Ingredient('Buns', 3),
        new Ingredient('Meat', 5)
      ]
    )
  ];
  selectedRecipe = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppingListService) {}
  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
