import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoringaPageRoutingModule } from './coringa-routing.module';

import { CoringaPage } from './coringa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoringaPageRoutingModule
  ],
  declarations: [CoringaPage]
})
export class CoringaPageModule {}
