import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoringaPage } from './coringa.page';

const routes: Routes = [
  {
    path: '',
    component: CoringaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoringaPageRoutingModule {}
