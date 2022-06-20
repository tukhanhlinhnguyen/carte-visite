import { NgModule } from '@angular/core';
import { CardComponent } from './card/card.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: ':uuid', pathMatch: 'full', component: CardComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
