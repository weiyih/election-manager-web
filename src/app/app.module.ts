import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainComponent } from './modules/main/main.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../app/material-modules';
import { AuthenticationGuard } from './core/guard/auth-guard.services';
import { AuthenticationService } from './core/auth/authentication.service';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    MainComponent
  ],
  providers: [AuthenticationGuard, AuthenticationService],
  bootstrap: [AppComponent],
})
export class AppModule { }
