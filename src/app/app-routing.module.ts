import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GameComponent }   from './game/game.component';
import { DBListComponent }   from './db-list/db-list.component';
import { AppComponent }   from './app.component';


const routes: Routes = [
  // { path: '', redirectTo: '/game', pathMatch: 'full' },
  { path: 'game',  component: GameComponent },
  { path: 'base',  component: DBListComponent },
  { path: '',  component: AppComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
