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
      sache    : "Quietsche-Entchen",
      entleiher: "Alex",
      frist    : "2025-10-01"
    },
    {
      id       : 1,
      sache    : "Wackel-Dackel",
      entleiher: "Berta",
      frist    : "2025-07-15"
    },
    {
      id       : 2,
      sache    : "Gartenzwerg",
      entleiher: "Claus",
      frist    : "2025-08-20"
    },
    {
      id       : 3,
      sache    : "Plömpel",
      entleiher: "Dora",
      frist    : "2025-09-10"
    },
    {
      id       : 4,
      sache    : "Eierharfe",
      entleiher: "Erika",
      frist    : "2025-11-05"
    }
  ];


  public getVerlieheneSachen(): VerlieheneSache[] {

    return this.verlieheneSachenArray;
  }

  public getVerlieheneSacheById( idx: number ): VerlieheneSache {

    return this.verlieheneSachenArray[idx];
  }

}
