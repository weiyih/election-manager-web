import { Component, Injectable, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Route Components
import { MainComponent } from './modules/main/main.component';
import { AuthenticationGuard } from './core/guard/auth-guard.services';

// Lazy loading route
const loginModule = () => import('./modules/login/login.module').then(m => m.LoginModule);

// @Injectable({ providedIn: 'root' })
const routes: Routes = [
  { path: '', component: MainComponent, canActivate: [AuthenticationGuard] },
  { path: 'account', loadChildren: loginModule },

  // Redirect to home
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
