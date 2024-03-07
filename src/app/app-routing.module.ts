import { RouterModule, Routes } from "@angular/router";
import { RecipesComponent } from "./recipes/recipes.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { NgModule } from "@angular/core";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipesResolverService } from "./recipes/recipes-resolver.service";

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full'}, 
    { path: 'recipes', component: RecipesComponent, children: [
        { 
            path: '', 
            component: RecipeStartComponent, 
            pathMatch: 'full' 
        }, //this will ask a user to please select a recipe.
        { 
            path: 'new', 
            component: RecipeEditComponent 
        }, // adding a new recipe is just editing?
        { 
            path: ':id', 
            component: RecipeDetailComponent, 
            resolve: [RecipesResolverService] 
        },         
        { 
            path: ':id/edit', 
            component: RecipeEditComponent,
            resolve: [RecipesResolverService] 
        }
    ]}, 
    { path: 'shopping-list', component: ShoppingListComponent }, 
    { path: 'not-found', component: ErrorPageComponent, data: { message: 'Page Not Found!'}},
    { path: '**', redirectTo: '/not-found'}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { 
    // this module has only one purpose: to provide the routing to our application. 
}