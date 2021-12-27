import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Card } from '../card';
import { CARDS } from '../card-collection';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})
export class CreateCardComponent implements OnInit {

  userInput = '';
  cards: Card[] = [];

  @Input() card?: Card;
  @Output() newCardEvent = new EventEmitter();

  addNewCard(event: Event){
    this.userInput = (<HTMLInputElement>event.target).value;
  }
  
  constructor() { }

  ngOnInit(): void {
  }
 
  
}
