import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { FormsFeatureRoutingModule } from './forms-feature-routing.module';

@NgModule({
  imports: [FormsFeatureRoutingModule, SharedModule],
  declarations: [FormsFeatureRoutingModule.components]
})
export class FormsFeatureModule { }
