import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { LeihobjekteComponentModule } from '../leihobjekt/leihobjekt.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeihobjekteComponentModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
