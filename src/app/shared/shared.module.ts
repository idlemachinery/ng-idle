import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdleModule } from 'common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IdleModule
  ],
  exports: [
    CommonModule,
    IdleModule
  ]
})
export class SharedModule { }
