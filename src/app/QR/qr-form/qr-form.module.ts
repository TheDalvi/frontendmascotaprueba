import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrFormPageRoutingModule } from './qr-form-routing.module';

import { QrFormPage } from './qr-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrFormPageRoutingModule
  ],
  declarations: [QrFormPage]
})
export class QrFormPageModule {}
