import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipeReyhan.model';

@Component({
  selector: 'app-recipe-list-reyhan',
  templateUrl: './recipe-list-reyhan.component.html',
  styleUrls: ['./recipe-list-reyhan.component.css']
})
export class RecipeListReyhanComponent implements OnInit {

  @Output() recipeWasSelected=new EventEmitter<Recipe>();
  // property:class recipeReyhan
  recipes:Recipe[]=[
    new Recipe('A Test Recipe','This is simply a test',
  'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('A Test Recipe two','This is simply a test','../src/app/img/hoogeng.jpg'),
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipeReyhan:Recipe){
    this.recipeWasSelected.emit(recipeReyhan);
  }

}
