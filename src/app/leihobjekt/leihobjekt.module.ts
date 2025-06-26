import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LeihobjektComponent } from './leihobjekt.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, RouterModule],
  declarations: [LeihobjektComponent],
  exports: [LeihobjektComponent]
})
export class LeihobjekteComponentModule {}
