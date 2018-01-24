import {Actions, Effect} from '@ngrx/effects';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/withLatestFrom';
import {HttpClient, HttpRequest} from '@angular/common/http';
import {Store} from '@ngrx/store';
import {Injectable} from '@angular/core';

import * as recipeActions from './recipe.actions';
import {Recipe} from '../recipe.model';
import * as fromRecipe from './recipe.reducers';


@Injectable()
export class RecipeEffects {
  @Effect() recipeFetch = this.actions$.ofType(recipeActions.FETCH_RECIPES).switchMap(
    (action: recipeActions.FetchRecipes) => {
      return this.httpClient.get<Recipe[]>('https://recipebook-b74df.firebaseio.com/recipes.json');
    }).map(
      (recipes) => {
        for (let recipe of recipes) {
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }
        return {
          type: recipeActions.SET_RECIPES,
          payload: recipes
        };
  });

  @Effect({dispatch: false}) recipeStore = this.actions$
    .ofType(recipeActions.STORE_RECIPES)
    .withLatestFrom(this.store.select('recipes'))
    .switchMap(([action, state]) => {
      const req = new HttpRequest('PUT', 'https://recipebook-b74df.firebaseio.com/recipes.json',
        state.recipes, {reportProgress: true});
      return this.httpClient.request(req);
    });

  constructor(private actions$: Actions,
              private httpClient: HttpClient,
              private store: Store<fromRecipe.FeatureState>) {}
}
