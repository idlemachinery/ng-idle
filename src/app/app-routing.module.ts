import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'common', loadChildren: 'src/app/common-feature/common-feature.module#CommonFeatureModule' },
  { path: 'forms', loadChildren: 'src/app/forms-feature/forms-feature.module#FormsFeatureModule' },
  { path: 'http', loadChildren: 'src/app/http-feature/http-feature.module#HttpFeatureModule' },
  { path: 'products', loadChildren: 'src/app/products/product.module#ProductModule' },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static components = [HomeComponent];
 }
