import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdleModule } from 'common';
import { IdleFormsModule, IdleReactiveFormsModule } from 'forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IdleModule,
    IdleFormsModule,
    IdleReactiveFormsModule
  ],
  exports: [
    CommonModule,
    IdleModule,
    IdleFormsModule,
    IdleReactiveFormsModule
  ]
})
export class SharedModule { }
