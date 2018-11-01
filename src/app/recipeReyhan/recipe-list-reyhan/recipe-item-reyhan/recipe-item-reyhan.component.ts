import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipeReyhan.model';

@Component({
  selector: 'app-recipe-item-reyhan',
  templateUrl: './recipe-item-reyhan.component.html',
  styleUrls: ['./recipe-item-reyhan.component.css']
})
export class RecipeItemReyhanComponent implements OnInit {

  @Input() recipeReyhan:Recipe;
  @Output() recipeSelected=new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onSelected(){
    this.recipeSelected.emit();
  }

}
