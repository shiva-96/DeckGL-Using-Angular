import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapCompareBeforAfterComponent } from './map-compare-befor-after/map-compare-befor-after.component';
import { IconLayerComponent } from './icon-layer/icon-layer.component';

@NgModule({
  declarations: [
    AppComponent,
    MapCompareBeforAfterComponent,
    IconLayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
