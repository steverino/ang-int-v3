import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Card } from './card';
import { CARDS } from './card-collection';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }

  getCards(): Observable<Card[]> {
    const cards = of(CARDS);
    return cards;
  }
}


