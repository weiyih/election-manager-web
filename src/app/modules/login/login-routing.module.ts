
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginLayoutComponent } from './login-layout.component';
import { LoginComponent } from './login.component';

const routes: Routes = [
    {
        path: '', component: LoginLayoutComponent,
        children: [
            { path: 'login', component: LoginComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginRoutingModule { }
