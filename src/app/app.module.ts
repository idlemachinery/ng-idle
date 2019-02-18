import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Imports for loading & configuring the in-memory web api
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductData } from './products/product-data';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientInMemoryWebApiModule.forRoot(ProductData),
    SharedModule
  ],
  declarations: [
    AppComponent,
    AppRoutingModule.components
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
