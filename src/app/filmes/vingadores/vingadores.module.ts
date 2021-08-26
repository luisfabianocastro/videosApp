import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VingadoresPageRoutingModule } from './vingadores-routing.module';

import { VingadoresPage } from './vingadores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VingadoresPageRoutingModule
  ],
  declarations: [VingadoresPage]
})
export class VingadoresPageModule {}
