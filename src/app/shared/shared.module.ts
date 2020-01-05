import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';

export const EXPORT_MODULE = [
  FormsModule,
  NgZorroAntdModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    ...EXPORT_MODULE
  ]
})
export class SharedModule { }
