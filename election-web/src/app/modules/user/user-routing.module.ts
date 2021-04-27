import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserLayoutComponent } from './user-layout.component';
import { UserListComponent } from './list/list.component';

const routes: Routes = [
    {
        path: '', component: UserLayoutComponent,
        children: [
            { path: '', component: UserListComponent },

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VoterRoutingModule { }
