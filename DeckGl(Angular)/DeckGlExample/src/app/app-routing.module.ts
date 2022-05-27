import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IconLayerComponent } from './icon-layer/icon-layer.component';
import { MapCompareBeforAfterComponent } from './map-compare-befor-after/map-compare-befor-after.component';

const routes: Routes = [
  {path:"mapComparemode", component: MapCompareBeforAfterComponent},
  {path:"iconLayer", component: IconLayerComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
