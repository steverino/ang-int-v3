import { Component, Input, OnInit } from '@angular/core';
import { CardService } from '../card.service';
import { Card } from '../card';

@Component({
  selector: 'app-for-sale',
  templateUrl: './for-sale.component.html',
  styleUrls: ['./for-sale.component.css']
})
export class ForSaleComponent implements OnInit {


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
