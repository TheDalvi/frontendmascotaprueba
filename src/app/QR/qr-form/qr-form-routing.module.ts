import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrFormPage } from './qr-form.page';

const routes: Routes = [
  {
    path: '',
    component: QrFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrFormPageRoutingModule {}
