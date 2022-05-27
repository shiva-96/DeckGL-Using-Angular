import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IconLayerExampleComponent } from './icon-layer-example/icon-layer-example.component';

const routes: Routes = [
  { path: "iconlayer", component: IconLayerExampleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
