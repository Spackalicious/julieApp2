import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'jsapp2-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent implements OnInit {
  // @Input()recipe: Recipe;
  // ^^once we switch to routing and aren't using property binding to set this anymore, it breaks. Also remove the import. 
  recipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService, 
              private route: ActivatedRoute, 
              private router: Router) { }

  ngOnInit() {
    // const id = this.route.snapshot.params['id'];
    // ^^doesn't work because we need something that will react to changes within the component. 
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          // now that we've fetched an ID and stored it, I want to fetch the new recipe! 
          this.recipe = this.recipeService.getRecipe(this.id);
        }
      );
  }

  onAddToShoppingList() {  
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    //  OR (they work the same)
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }
}
