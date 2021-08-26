import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvesPage } from './aves.page';

const routes: Routes = [
  {
    path: '',
    component: AvesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvesPageRoutingModule {}
