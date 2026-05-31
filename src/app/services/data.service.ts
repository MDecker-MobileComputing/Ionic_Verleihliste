import { Injectable } from '@angular/core';


export interface VerlieheneSache {

  id       : number;
  sache    : string;
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
      frist    : "05.11.2026",
      faellig  : false
    },
    {
      id       : 1,
      sache    : "Gartenzwerg",
      entleiher: "Claus",
      frist    : "20.08.2026",
      faellig  : false
    },
    {
      id       : 2,
      sache    : "Plömpel",
      entleiher: "Dora",
      frist    : "01.06.2026",
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
      frist    : "15.06.2027",
      faellig  : false
    }
  ];


  /**
   * Getter für alle verliehenen Sachen.
   * 
   * @returns Array mit allen verliehenen Sachen
   */
  public getVerlieheneSachen(): VerlieheneSache[] {

    return this.verlieheneSachenArray;
  }


  /**
   * Getter für eine verliehene Sache anhand ihres Indexes.
   * 
   * @param idx Index (0-basiert) für verliehene Sache
   * 
   * @returns Verliehene Sache mit dem gegebenen Index
   */
  public getVerlieheneSacheById( idx: number ): VerlieheneSache {

    return this.verlieheneSachenArray[idx];
  }
}
