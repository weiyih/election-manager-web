import { Component, Injectable, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Route Components
import { MainComponent } from './modules/main/main.component';
import { AuthGuard } from './core/guard/auth-guard.services';
import { LoginComponent } from './modules/login/login.component';

const routes: Routes = [
  { path: '', component: MainComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },

  // Redirect to home
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
