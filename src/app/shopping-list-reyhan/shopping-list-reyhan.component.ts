import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredientReyhan.model'

@Component({
  selector: 'app-shopping-list-reyhan',
  templateUrl: './shopping-list-reyhan.component.html',
  styleUrls: ['./shopping-list-reyhan.component.css']
})
export class ShoppingListReyhanComponent implements OnInit {

  ingredients:Ingredient[]=[
    new Ingredient('Apples', 23),
    new Ingredient('Tomato', 10),
  ];

  constructor() { }

  ngOnInit() {
  }
  onIngredientAdded(ingredient:Ingredient){
    this.ingredients.push(ingredient);
  }

}
