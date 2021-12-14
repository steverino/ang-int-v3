import { Component, Input, OnInit } from '@angular/core';
import { CARDS } from '../card-collection';
import { Card } from '../card';
import { CardService } from '../card.service';


@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css'],
})
export class CardDetailComponent implements OnInit {
  cards: Card[] = [];

  @Input() card?: Card;

  selectedCard?: Card;
 
  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.getCards();
  }

  getCards(): void {
    this.cardService.getCards()
      .subscribe(cards => this.cards = cards);
  }

}
