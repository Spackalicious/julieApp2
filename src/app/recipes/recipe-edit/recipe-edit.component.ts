import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'jsapp2-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrl: './recipe-edit.component.css'
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false; // initially assume we are creating a new recipe. 

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.params 
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null; // if params HAS an id property, then we are editing an existing recipe. If not, then new recipe. 
          // If params has an id property, this will be a string with the ID, otherwise it will be undefined. 
          // if != null is true, then editMode is true and we are editing a recipe. If it returns false, not not null, then we are in new mode. 
          console.log(this.editMode);
        }
      );
  }

}
