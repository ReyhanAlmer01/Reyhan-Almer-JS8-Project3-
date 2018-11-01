import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipeReyhan.model';

@Component({
  selector: 'app-recipe-detail-reyhan',
  templateUrl: './recipe-detail-reyhan.component.html',
  styleUrls: ['./recipe-detail-reyhan.component.css']
})
export class RecipeDetailReyhanComponent implements OnInit {
  @Input() recipeReyhan:Recipe;
  constructor() { }

  ngOnInit() {
  }

}
