import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../card';
import { CARDS } from '../card-collection';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})
export class CreateCardComponent implements OnInit {

  

  @Input() card?: Card;
  
  
  constructor() { }

  ngOnInit(): void {
  }
 
  
}
