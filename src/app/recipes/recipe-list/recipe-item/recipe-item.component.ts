import { RecipeService } from './../../recipe.service';
import { Recipe } from './../../recipe.model';
import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeItem: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onSelect() {
    this.recipeService.selectedRecipe.emit(this.recipeItem);
  }

}
