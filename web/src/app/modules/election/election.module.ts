import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ElectionService } from '@services/election.services'
import { ElectionRoutingModule } from './election-routing.module';
import { ElectionLayoutComponent } from './election-layout.component';
import { ListComponent } from './list/list.component';
import { MaterialModule } from '@app/material-modules';
import { PipeModule } from '@app/pipes';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ElectionRoutingModule,
    MaterialModule,
    PipeModule,
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
