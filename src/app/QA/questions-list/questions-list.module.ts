import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { QuestionsListRoutingModule } from './questions-list-routing.module';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    QuestionsListRoutingModule,
    SharedModule
  ]
})
export class QuestionsListModule { }
