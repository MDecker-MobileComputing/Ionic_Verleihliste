
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule, Platform } from '@ionic/angular';
import { DataService, VerlieheneSache } from '../services/data.service';

@Component({
  selector: 'app-leihobjekt-message',
  templateUrl: './view-leihobjekt.page.html',
  styleUrls: ['./view-leihobjekt.page.scss'],
  standalone: false,
})
export class ViewMessagePage implements OnInit {

  public verlieheneSache!: VerlieheneSache;
  private data           = inject( DataService    );
  private activatedRoute = inject( ActivatedRoute );
  private platform       = inject( Platform       );

  constructor() {}

  ngOnInit() {

    const id = this.activatedRoute.snapshot.paramMap.get('id') as string;

    this.verlieheneSache = 
        this.data.getVerlieheneSacheById( parseInt( id, 10 ) );
  }

  getBackButtonText() {
    const isIos = this.platform.is('ios')
    return isIos ? 'Inbox' : '';
  }

}

