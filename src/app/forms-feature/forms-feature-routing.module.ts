import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsFeatureComponent } from './forms-feature.component';
import { EditFormComponent } from './edit-form/edit-form.component';

const routes: Routes = [
  { path: '', component: FormsFeatureComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsFeatureRoutingModule {
  static components = [FormsFeatureComponent, EditFormComponent];
}
