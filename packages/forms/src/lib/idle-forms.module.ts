import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AutofocusDirective } from './directives/autofocus.directive';

@NgModule({
  imports: [FormsModule],
  declarations: [AutofocusDirective],
  exports: [FormsModule, AutofocusDirective]
})
export class IdleFormsModule { }
