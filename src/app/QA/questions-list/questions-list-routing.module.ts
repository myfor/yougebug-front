import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './list/list.component';

const questionsListRoutes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(questionsListRoutes)],
  exports: [RouterModule]
})
export class QuestionsListRoutingModule { }
