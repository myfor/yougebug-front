import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export const EXPORT_MODULE = [
  FormsModule
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
