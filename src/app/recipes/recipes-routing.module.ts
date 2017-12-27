import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipeStartComponent} from './recipe-start/recipe-start.component';
import {RecipesEditComponent} from './recipes-edit/recipes-edit.component';
import {RecipesComponent} from './recipes.component';
import {AuthGuardService} from '../auth/auth-guard.service';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';

const recipesRoutes: Routes = [
  { path: '', component: RecipesComponent, children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipesEditComponent, canActivate: [AuthGuardService] },
      { path: ':id', component: RecipeDetailComponent },
      { path: ':id/edit', component: RecipesEditComponent, canActivate: [AuthGuardService]}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(recipesRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuardService
  ]
})
export class RecipesRoutingModule {}
