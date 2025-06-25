import { Component, inject } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';


import { DataService, VerlieheneSache } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  private data = inject( DataService ); // anstelle Konstruktor-Injection

  refresh( ev: any ) {

    setTimeout( () => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000 );
  }

  getVerlieheneSachen(): VerlieheneSache[] {

    return this.data.getVerlieheneSachen();
  }

}
