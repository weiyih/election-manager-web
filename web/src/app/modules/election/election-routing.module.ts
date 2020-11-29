import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElectionLayoutComponent } from './election-layout.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
    {
        path: '', component: ElectionLayoutComponent,
        children: [
            { path: '', component: ListComponent },
            // { path: 'add', component: AddEditComponent },
            { path: '/edit', component: EditComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ElectionRoutingModule { }
