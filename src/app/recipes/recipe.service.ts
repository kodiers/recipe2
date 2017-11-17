import {Recipe} from './recipe.model';
import {Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe',
            'This is simply a test',
            'https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_1280.jpg', [
                new Ingredient('meat', 1),
                new Ingredient('French fries', 20)
            ]),
        new Recipe(
            'Another Test Recipe',
            'This is simply a test',
            'https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_1280.jpg', [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ])
    ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}
