import { ShoppingListService } from './../shopping-list.service';
import { Ingredient } from "./../../shared/ingredient.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"]
})
export class ShoppingEditComponent implements OnInit {
  ingredient: Ingredient;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {}

  sendIngredient(nameInput: HTMLInputElement, amountInput: HTMLInputElement) {
    this.ingredient = {
      name: nameInput.value,
      amount: Number(amountInput.value)
    };
    this.shoppingListService.addIngredient(this.ingredient);
  }
}
