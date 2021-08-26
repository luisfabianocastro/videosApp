import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomemaranhaPage } from './homemaranha.page';

const routes: Routes = [
  {
    path: '',
    component: HomemaranhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomemaranhaPageRoutingModule {}
