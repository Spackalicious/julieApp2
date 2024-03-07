import { Injectable} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { map, tap } from "rxjs";

@Injectable({providedIn: 'root'})
export class DataStorageService {
    constructor(
        private http: HttpClient, 
        private recipeService: RecipeService
    ) {}

    // this will be called from header.component.html
    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        this.http
        .put(
            'https://recipe-book-d51fe-default-rtdb.firebaseio.com/recipes.json', 
            recipes
        ).subscribe(response => {
            console.log(response);
        });
    }

    fetchRecipes() {
        return this.http.get<Recipe[]>('https://recipe-book-d51fe-default-rtdb.firebaseio.com/recipes.json')
        .pipe(map(recipes => { // this first map is an rxjs/operator. 
            return recipes.map(recipe => {
                return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []}; // the "..." is the SPREAD OPERATOR. It copies all the properties of recipe, to copy all the existing data and then ingredients. And ingredients: recipe.ingredients is a ternary expression - checking whether recipe.ingredients is true. 
                // the ? says if there are NOT ingredients, that we'll set it to an empty array.
            }); // this next map is called on an array, just the normal JS array method map. Same name, different functions! 
        }), 
            tap(recipes => {
                this.recipeService.setRecipes(recipes);
            })
        )
        // instead of subscribing, I'll return this call to this HTTP service, which means I need to subscribe in the header component. 
        // .subscribe(recipes => {
        //     // console.log(recipes);
        //     this.recipeService.setRecipes(recipes);
        //     // ^^was getting an error on recipes because TypeScript didn't know that the type of what we're setting is an array. So we added <Recipe[]> to the get. 
        // })
    }

}