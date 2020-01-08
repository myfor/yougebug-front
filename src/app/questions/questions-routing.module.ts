import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionsListComponent } from './questions-list/questions-list.component';
import { QuestionsDetailComponent } from './questions-detail/questions-detail.component';
import { SearchListComponent } from './search-list/search-list.component';

const QUESTIONS_ROUTE: Routes = [
  {
    path: '',
    component: QuestionsListComponent,
    children: [
      { path: ':id/:title', component: QuestionsDetailComponent },
      { path: '', component: SearchListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(QUESTIONS_ROUTE)],
  exports: [RouterModule]
})
export class QuestionsRoutingModule { }
