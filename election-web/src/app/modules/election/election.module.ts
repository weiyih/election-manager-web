import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ElectionService } from '@services/election.services';
import { BallotService } from '@services/candidate.services';
import { ElectionRoutingModule } from './election-routing.module';
import { ElectionLayoutComponent } from './election-layout.component';
import { MaterialModule } from 'src/app/material.modules';
import { PipeModule } from '@app/pipes';

import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { ResultComponent } from './result/result.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ElectionRoutingModule,
    MaterialModule,
    PipeModule,
  ],
  declarations: [
    ElectionLayoutComponent,
    ListComponent,
    EditComponent,
    ResultComponent,
    // AddComponent
    // ViewComponent
    ],
  providers: [
    ElectionService, BallotService
  ]
})
export class ElectionModule {}
