import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CreateCardComponent } from './create-card/create-card.component';
import { AllCardsComponent } from './all-cards/all-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateCardComponent,
    AllCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
