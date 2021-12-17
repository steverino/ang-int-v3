import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CreateCardComponent } from './create-card/create-card.component';
import { AllCardsComponent } from './all-cards/all-cards.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { CardsComponent } from './cards/cards.component';
import { CardService } from './card.service';
import { ForSaleComponent } from './for-sale/for-sale.component';
import { SoldComponent } from './sold/sold.component';
import { SaleNavComponent } from './sale-nav/sale-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateCardComponent,
    AllCardsComponent,
    CardDetailComponent,
    CardsComponent,
    ForSaleComponent,
    SoldComponent,
    SaleNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
