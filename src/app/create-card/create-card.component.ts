import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Card } from '../card';
import { CARDS } from '../card-collection';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})
export class CreateCardComponent implements OnInit {

  cards: Card[] = [];

  @Input() card?: Card;
  @Output() newCardEvent = new EventEmitter();

  addNewCard(value: string){
    this.newCardEvent.emit(value);
  }
  
  constructor() { }

  ngOnInit(): void {
  }
 
  
}
