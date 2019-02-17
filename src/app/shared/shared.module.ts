import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdleModule } from 'ng-idle-common';
import { IdleFormsModule, IdleReactiveFormsModule } from 'ng-idle-forms';

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
