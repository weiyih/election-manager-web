import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ElectionRoutingModule } from './election-routing.module';
import { ElectionComponent } from './election.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ElectionRoutingModule],
  declarations: [
      ElectionComponent,
    // AddComponent
    // ViewComponent
    ],
})
export class ElectionModule {}
