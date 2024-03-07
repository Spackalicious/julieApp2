import { Component, EventEmitter, Output } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Recipe } from '../recipes/recipe.model';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    constructor(
        private dataStorageService: DataStorageService
    ) {}
    
    onSaveData() {
        this.dataStorageService.storeRecipes();
    }

    onFetchData() {
        // this.dataStorageService.fetchRecipes();
        this.dataStorageService.fetchRecipes().subscribe();
    }


    // don't need this now that we have routerLinkActive and routerLink for navigation!
    // @Output() featureSelected = new EventEmitter<string>();
    
    // onSelect(feature: string) {
    //     this.featureSelected.emit(feature);
    // }
}