import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';
import { Card } from '../card';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  cards: Card[] = [];

  selectedCard?: Card;
  
  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.cardService.getCards().subscribe((cards) => this.cards = cards);
  }
  
}
