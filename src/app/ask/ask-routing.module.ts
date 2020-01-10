import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AskComponent } from './ask/ask.component';

const routes: Routes = [
  { path: '', component: AskComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AskRoutingModule { }
