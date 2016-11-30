import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { WordDetailComponent } from './word-detail.component';
import { WordService }          from './word.service';
import { GameComponent } from './game/game.component';
import { DBListComponent } from './db-list/db-list.component';

@NgModule({
  declarations: [
    AppComponent,
    WordDetailComponent,
    GameComponent,
    DBListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [WordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
