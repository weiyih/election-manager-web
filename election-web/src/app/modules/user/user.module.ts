import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { VoterService } from '@services/voters.services';
// import { ElectionService } from '@services/election.services';
// import { BallotService } from '@services/candidate.services';
import { VoterRoutingModule } from './user-routing.module';
import { MaterialModule } from 'src/app/material.modules';
import { PipeModule } from '@app/pipes';

import { UserLayoutComponent } from './user-layout.component';
import { UserListComponent } from './list/list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    VoterRoutingModule,
    MaterialModule,
    PipeModule,
  ],
  declarations: [
    UserLayoutComponent,
    UserListComponent,
    ],
  providers: [
    VoterService
  ]
})
export class UserModule {}
