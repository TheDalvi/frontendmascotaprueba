import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrListPageRoutingModule } from './qr-list-routing.module';

import { QrListPage } from './qr-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrListPageRoutingModule
  ],
  declarations: [QrListPage]
})
export class QrListPageModule {}
