import { Component, OnInit } from '@angular/core';
// import { Recipe } from './recipe.model';
// import { RecipeService } from './recipe.service';

@Component({
  selector: 'jsapp2-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css', 
  // providers: [RecipeService] // we still need this for our recipes to show up in the list! 
})
export class RecipesComponent implements OnInit {

  constructor( ) { 

  }
  
  ngOnInit() {
  
  }
}
