import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionsListComponent } from './questions-list/questions-list.component';

const questionsRoutes: Routes = [
  { path: '', component: QuestionsListComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forChild(questionsRoutes)],
  exports: [RouterModule]
})
export class QuestionsRoutingModule { }
