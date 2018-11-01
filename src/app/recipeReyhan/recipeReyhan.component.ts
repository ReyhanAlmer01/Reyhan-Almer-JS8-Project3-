import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipeReyhan.model';

@Component({
  selector: 'app-recipeReyhan',
  templateUrl: './recipeReyhan.component.html',
  styleUrls: ['./recipeReyhan.component.css']
})
export class RecipeReyhanComponent implements OnInit {
  selectedRecipe:Recipe;
  constructor() { }

  ngOnInit() {
  }

}
