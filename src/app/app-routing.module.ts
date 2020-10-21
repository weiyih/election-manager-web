import { Injectable, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Route Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';

// @Injectable({ providedIn: 'root' })
const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'main', component: MainComponent },
  // { path: '**', component: PageNotFoundComponent } //TODO - 404 Page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
