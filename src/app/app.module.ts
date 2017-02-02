import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CatalogsComponent } from './components/catalogs/catalogs.component';
import { CatalogsService } from './services/catalogs/catalogs.service';
import { GameService } from './services/game/game.service';
import { SettingsService } from './services/settings/settings.service';
import { DialogsService } from './services/dialogs/dialogs.service';

import { AppRoutingModule }     from './app-routing.module';
import { HelloComponent } from './components/hello/hello.component';
import { HeaderComponent } from './components/header/header.component';
import { Word } from './models/classes/word';
import { Catalog } from './models/classes/catalog';
import { ModalDialog } from './components/dialogs/modalDialog.component';
import { ICatalog } from './models/interfaces/icatalog';
import { ITask } from './models/interfaces/itask';
import * as _ from "lodash";
import 'hammerjs';
import { GameComponent } from './components/game/game.component';
import { MaterialModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    CatalogsComponent,
    HelloComponent,
    GameComponent,
    ModalDialog,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    [MaterialModule.forRoot()]
  ],
  entryComponents: [ModalDialog],
  providers: [CatalogsService, SettingsService, GameService, DialogsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
