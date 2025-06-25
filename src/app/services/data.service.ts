import { Injectable } from '@angular/core';

export interface VerlieheneSache {
  id       : number;
  sache    : string,
  entleiher: string;
  frist    : string;
  faellig  : boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public verlieheneSachenArray: VerlieheneSache[] = [
    {
      id       : 0,
      sache    : "Eierharfe",
      entleiher: "Erika",
      frist    : "05.11.2025",
      faellig  : false
    },
    {
      id       : 1,
      sache    : "Gartenzwerg",
      entleiher: "Claus",
      frist    : "20.08.2025",
      faellig  : false
    },
    {
      id       : 2,
      sache    : "Plömpel",
      entleiher: "Dora",
      frist    : "10.06.2025",
      faellig  : true
    },
    {
      id       : 3,
      sache    : "Quietsche-Entchen",
      entleiher: "Alex",
      frist    : "Dauerleihgabe",
      faellig  : false
    },
    {
      id       : 4,
      sache    : "Wackel-Dackel",
      entleiher: "Berta",
      frist    : "15.06.2026",
      faellig  : false
    }
  ];


  public getVerlieheneSachen(): VerlieheneSache[] {

    return this.verlieheneSachenArray;
  }

  public getVerlieheneSacheById( idx: number ): VerlieheneSache {

    return this.verlieheneSachenArray[idx];
  }

}
