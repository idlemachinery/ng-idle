import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EnsureModuleLoadedOnceGuard } from 'ng-idle-common';

import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [NavMenuComponent, FooterComponent],
  exports: [NavMenuComponent, FooterComponent],
  providers: []

})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  // Ensure that CoreModule is only loaded into AppModule

  // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
