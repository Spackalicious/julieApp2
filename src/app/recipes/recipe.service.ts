import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService {
    // recipeSelected = new EventEmitter<Recipe>();
    recipeSelected = new Subject<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Tasty Schnitzel', 
            'A super-tasty Schnitzel - just awesome!', 
            'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG', 
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]
        ), 
        new Recipe(
            'Big Fat Burger', 
            'What else you need to say?', 
            'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg', 
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ]
        )
    ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }
    // index is being used as id
    // could also call this.recipes.slice()[index]; because slice would give you a copy of your array, but won't be a "deep" copy. The objects are still the same anyway, so you can also directly return the object like this. 

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}