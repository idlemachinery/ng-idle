import { NgModule } from '@angular/core';
import { TrimPipe } from './pipes/trim.pipe';
import { CapitalizePipe } from './pipes/capitalize.pipe';

@NgModule({
  imports: [],
  declarations: [TrimPipe, CapitalizePipe],
  exports: [TrimPipe, CapitalizePipe]
})
export class IdleModule { }
