import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OscroodsPageRoutingModule } from './oscroods-routing.module';

import { OscroodsPage } from './oscroods.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OscroodsPageRoutingModule
  ],
  declarations: [OscroodsPage]
})
export class OscroodsPageModule {}
