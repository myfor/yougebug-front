import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { LeftSideComponent } from './left-side/left-side.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { TagsComponent } from './tags/tags.component';
import { UserTagComponent } from './user-tag/user-tag.component';
import { VoteComponent } from './vote/vote.component';

export const EXPORT_COMPONENT = [
  LeftSideComponent,
  TagsComponent,
  UserTagComponent,
  SearchBoxComponent,
  VoteComponent
];

export const EXPORT_MODULE = [
  FormsModule,
  ReactiveFormsModule,
  NgZorroAntdModule,
  CommonModule,
  RouterModule
];

@NgModule({
  declarations: [
    ...EXPORT_COMPONENT
  ],
  imports: [
    ...EXPORT_MODULE
  ],
  exports: [
    ...EXPORT_MODULE,
    ...EXPORT_COMPONENT
  ]
})
export class SharedModule { }
