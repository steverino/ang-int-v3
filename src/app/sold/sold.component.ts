import { Component, Input, OnInit } from '@angular/core';
import { CardService } from '../card.service';
import { Card } from '../card';

@Component({
  selector: 'app-sold',
  templateUrl: './sold.component.html',
  styleUrls: ['./sold.component.css']
})
export class SoldComponent implements OnInit {

  cards: Card[] = [];
  
  @Input() card!: Card;

  selectedCard?: Card;
  
  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.getCards();
  }

  getCards(): void {
    this.cardService.getCards().subscribe((cards) => this.cards = cards);
     
  }

  onSelect(card: Card): void {
    this.selectedCard = card;
  }

}
