import { Injectable } from '@angular/core';

export interface VerlieheneSache {
  id       : number;
  sache    : string,
  entleiher: string;
  frist    : string;
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
      frist    : "05.11.2025"
    },
    {
      id       : 1,
      sache    : "Gartenzwerg",
      entleiher: "Claus",
      frist    : "20.08.2025"
    },
    {
      id       : 2,
      sache    : "Plömpel",
      entleiher: "Dora",
      frist    : "10.09.2025"
    },
    {
      id       : 3,
      sache    : "Quietsche-Entchen",
      entleiher: "Alex",
      frist    : "Dauerleihgabe"
    },
    {
      id       : 4,
      sache    : "Wackel-Dackel",
      entleiher: "Berta",
      frist    : "15.07.2025"
    }
  ];


  public getVerlieheneSachen(): VerlieheneSache[] {

    return this.verlieheneSachenArray;
  }

  public getVerlieheneSacheById( idx: number ): VerlieheneSache {

    return this.verlieheneSachenArray[idx];
  }

}
