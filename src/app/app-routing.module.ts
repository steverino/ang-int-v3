import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllCardsComponent } from './all-cards/all-cards.component';
import { CreateCardComponent } from './create-card/create-card.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { ForSaleComponent } from './for-sale/for-sale.component';
import { SoldComponent } from './sold/sold.component';

const routes: Routes = [
  { path: 'all-cards', component: AllCardsComponent },
  { path: 'create-card', component: CreateCardComponent },
  { path: 'card-detail', component: CardDetailComponent },
  { path: 'for-sale', component: ForSaleComponent},
  { path: 'sold', component: SoldComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
