import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VingadoresPage } from './vingadores.page';

const routes: Routes = [
  {
    path: '',
    component: VingadoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VingadoresPageRoutingModule {}
