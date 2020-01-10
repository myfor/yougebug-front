import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { AskRoutingModule } from './ask-routing.module';
import { AskComponent } from './ask/ask.component';


@NgModule({
  declarations: [AskComponent],
  imports: [
    AskRoutingModule,
    SharedModule
  ]
})
export class AskModule { }
