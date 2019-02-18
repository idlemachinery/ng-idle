import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HttpFeatureComponent } from './http-feature.component';

const routes: Routes = [
  { path: '', component: HttpFeatureComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HttpFeatureRoutingModule {
  static components = [HttpFeatureComponent];
}
