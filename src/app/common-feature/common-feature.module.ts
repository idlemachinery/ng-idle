import { NgModule } from '@angular/core';

import { CommonFeatureRoutingModule } from './common-feature-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonFeatureRoutingModule, SharedModule],
  declarations: [CommonFeatureRoutingModule.components]
})
export class CommonFeatureModule { }
