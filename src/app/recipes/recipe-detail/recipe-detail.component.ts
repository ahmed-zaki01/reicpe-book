import { RecipeService } from "./../recipe.service";
import { Recipe } from "./../recipe.model";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"]
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipeDetails: Recipe;
  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    console.log(this.recipeDetails);
  }

  addRecipeIngredients() {
    this.recipeService.addIngredientsToShoppingList(
      this.recipeDetails.ingredients
    );
  }
}
