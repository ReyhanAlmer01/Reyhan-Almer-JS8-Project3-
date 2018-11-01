import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredientReyhan.model';

@Component({
  selector: 'app-shopping-edit-reyhan',
  templateUrl: './shopping-edit-reyhan.component.html',
  styleUrls: ['./shopping-edit-reyhan.component.css']
})
export class ShoppingEditReyhanComponent implements OnInit {

  @ViewChild('nameInput') nameRef:ElementRef;
  @ViewChild('amountInput') amountRef:ElementRef;
  @Output() ingredientAdded= new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }
  onAddItem(){
    const ingName=this.nameRef.nativeElement.value;
    const ingAmount=this.amountRef.nativeElement.value;
    const newIngredient= new Ingredient(ingName, ingAmount);
    this.ingredientAdded.emit(newIngredient);
  }

}
