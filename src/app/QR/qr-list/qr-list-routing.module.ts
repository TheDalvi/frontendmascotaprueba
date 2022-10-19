import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrListPage } from './qr-list.page';

const routes: Routes = [
  {
    path: '',
    component: QrListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrListPageRoutingModule {}
