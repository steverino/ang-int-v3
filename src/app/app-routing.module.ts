import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllCardsComponent } from './all-cards/all-cards.component';
import { CreateCardComponent } from './create-card/create-card.component';

const routes: Routes = [
  { path: 'all-cards', component: AllCardsComponent },
  { path: 'create-card', component: CreateCardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
