import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderReyhanComponent } from './headerReyhan/headerReyhan.component';
import { RecipeReyhanComponent } from './recipeReyhan/recipeReyhan.component';
import { ShoppingListReyhanComponent } from './shopping-list-reyhan/shopping-list-reyhan.component';

import { RecipeListReyhanComponent } from "./recipeReyhan/recipe-list-reyhan/recipe-list-reyhan.component";
import { RecipeDetailReyhanComponent } from "./recipeReyhan/recipe-detail-reyhan/recipe-detail-reyhan.component";

import {RecipeItemReyhanComponent } from "./recipeReyhan/recipe-list-reyhan/recipe-item-reyhan/recipe-item-reyhan.component";
import {ShoppingEditReyhanComponent} from "./shopping-list-reyhan/shopping-edit-reyhan/shopping-edit-reyhan.component";
import { DropdownDirective } from './shared/dropdown.directive.directive';
@NgModule({
  declarations: [
    AppComponent,
    HeaderReyhanComponent,
    RecipeReyhanComponent,
    ShoppingListReyhanComponent,

    RecipeListReyhanComponent,
    RecipeDetailReyhanComponent,
    RecipeItemReyhanComponent,
    ShoppingEditReyhanComponent,
    DropdownDirective
],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
