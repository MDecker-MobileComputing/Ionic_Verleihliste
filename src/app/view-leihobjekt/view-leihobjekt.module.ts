import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ViewMessagePage } from './view-leihobjekt.page';

import { IonicModule } from '@ionic/angular';

import { ViewMessagePageRoutingModule } from './view-leihobjekt-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewMessagePageRoutingModule
  ],
  declarations: [ViewMessagePage]
})
export class ViewLeihobjektPageModule {}
