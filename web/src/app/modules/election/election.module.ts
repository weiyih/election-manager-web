import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ElectionService } from '@services/election.services'
import { ElectionRoutingModule } from './election-routing.module';
import { ElectionLayoutComponent } from './election-layout.component';
import { ListComponent } from './list/list.component';
import { MaterialModule } from '@app/material-modules';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ElectionRoutingModule,
    MaterialModule,
  ],
  declarations: [
    ElectionLayoutComponent,
    ListComponent,
    // AddComponent
    // ViewComponent
    ],
  providers: [
    ElectionService,
  ]
})
export class ElectionModule {}
