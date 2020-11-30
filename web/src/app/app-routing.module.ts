import { Component, Injectable, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Route Components
import { AuthGuard } from './core/auth/auth-guard.services';
import { LoginComponent } from './modules/login/login.component';

// Lazy load elections
const electionModule = () => import('./modules/election/election.module').then(x => x.ElectionModule);

const routes: Routes = [
  { path: 'election', loadChildren: electionModule, canActivate: [AuthGuard] },
  // { path: 'voters', loadChildren: electionModule, canActivate: [AuthGuard] },
  // { path: 'result', loadChildren: electionModule, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },

  // Redirect to home
  { path: '', redirectTo: '/election', pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
