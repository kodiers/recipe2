import {Component, OnInit} from '@angular/core';

import {Store} from '@ngrx/store';
import * as fromApp from '../../store/app.reducers';
import {Observable} from 'rxjs/Observable';
import * as fromAuth from '../../auth/store/auth.reducers';
import * as authActions from '../../auth/store/auth.actions';
import * as recipeActions from '../../recipes/store/recipe.actions';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  authState: Observable<fromAuth.State>;

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.authState = this.store.select('auth');
  }

  onSaveData() {
    this.store.dispatch(new recipeActions.StoreRecipes());
  }

  onFetchData() {
    this.store.dispatch(new recipeActions.FetchRecipes());
  }

  onLogout() {
    this.store.dispatch(new authActions.Logout());
  }

}
