import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewMessagePage } from './view-leihobjekt.page';

const routes: Routes = [
  {
    path: '',
    component: ViewMessagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewMessagePageRoutingModule {}
