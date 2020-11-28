// Login Module
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginLayoutComponent } from './login-layout.component';
import { LoginComponent } from './login.component';
import { MaterialModule } from '../../../app/material-modules';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        LoginRoutingModule, // Routes for Login Module
        MaterialModule
    ],
    declarations: [
        LoginLayoutComponent, // Root Login Component Template
        LoginComponent // Login Page
    ]
})
export class LoginModule { }
