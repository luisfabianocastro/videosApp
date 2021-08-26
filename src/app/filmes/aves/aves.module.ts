import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvesPageRoutingModule } from './aves-routing.module';

import { AvesPage } from './aves.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvesPageRoutingModule
  ],
  declarations: [AvesPage]
})
export class AvesPageModule {}
