import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CatalogsComponent } from './components/catalogs/catalogs.component';
import { CatalogsService } from './services/catalogs/catalogs.service';
import { GameService } from './services/game/game.service';
import { SettingsService } from './services/settings/settings.service';

import { AppRoutingModule }     from './app-routing.module';
import { HelloComponent } from './components/hello/hello.component';
import { Word } from './models/classes/word';
import { Catalog } from './models/classes/catalog';
import { ICatalog } from './models/interfaces/icatalog';
import { ITask } from './models/interfaces/itask';
import * as _ from "lodash";
import { GameComponent } from './components/game/game.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogsComponent,
    HelloComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [CatalogsService, SettingsService, GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
