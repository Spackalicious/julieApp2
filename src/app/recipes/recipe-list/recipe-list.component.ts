import { Component } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'jsapp2-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test', 'https://imgs.search.brave.com/1Bp992EOuVTc8O2dvCw_qgGE7T4d1OffNSRQUN8yzaY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvY29va2luZy1s/b2dvLWRlc2lnbl82/MzYwODMtMTQwLmpw/Zz9zaXplPTYyNiZl/eHQ9anBn')
  ];

}
