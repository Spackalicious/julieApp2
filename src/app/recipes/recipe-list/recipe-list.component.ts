import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'jsapp2-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test', 'https://imgs.search.brave.com/3XDxnFO7dypnlCcR8BQCF2Wgl-ps_ECfwZ0tZmVFIJ8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuZHJ5aWNvbnMu/Y29tL3VwbG9hZHMv/aWNvbi9wcmV2aWV3/LzExMjU3L3NtYWxs/XzF4X2RjY2ZlYWI0/LTUzOGUtNGZhMS04/ZjU4LTk5ZTQ1NGJl/Yjc2ZS5wbmc'), 
    new Recipe('A 2nd Test Recipe', 'This is another test', 'https://imgs.search.brave.com/3XDxnFO7dypnlCcR8BQCF2Wgl-ps_ECfwZ0tZmVFIJ8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuZHJ5aWNvbnMu/Y29tL3VwbG9hZHMv/aWNvbi9wcmV2aWV3/LzExMjU3L3NtYWxs/XzF4X2RjY2ZlYWI0/LTUzOGUtNGZhMS04/ZjU4LTk5ZTQ1NGJl/Yjc2ZS5wbmc')
  ];

  constructor() {

  }

  ngOnInit() {

  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
