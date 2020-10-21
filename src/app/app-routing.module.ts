import { Injectable, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Route Components
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login.component';
import { MainComponent } from './modules/main/main.component';
import { AuthenticationGuard } from './core/guard/auth-guard.services';

// @Injectable({ providedIn: 'root' })
const routes: Routes = [
  { path: '', component: AppComponent, canActivate: [AuthenticationGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'main', component: MainComponent },
  { path: '**', redirectTo: '' },
  // { path: '**', component: PageNotFoundComponent } //TODO - 404 Page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
