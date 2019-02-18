import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { HttpFeatureRoutingModule } from './http-feature-routing.module';

@NgModule({
  imports: [HttpFeatureRoutingModule, SharedModule],
  declarations: [HttpFeatureRoutingModule.components]
})
export class HttpFeatureModule { }
