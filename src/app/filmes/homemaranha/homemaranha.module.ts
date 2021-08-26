import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomemaranhaPageRoutingModule } from './homemaranha-routing.module';

import { HomemaranhaPage } from './homemaranha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomemaranhaPageRoutingModule
  ],
  declarations: [HomemaranhaPage]
})
export class HomemaranhaPageModule {}
