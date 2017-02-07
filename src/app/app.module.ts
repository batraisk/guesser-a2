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
import { userAuthComponent } from './components/userAuth/userAuth.component';
import { MaterialModule } from '@angular/material';
import { Angular2TokenService } from './services/token.service';
import { A2tUiModule } from 'angular2-token';

// import { Angular2TokenService, A2tUiModule } from 'angular2-token';

@NgModule({
  declarations: [
    AppComponent,
    CatalogsComponent,
    HelloComponent,
    GameComponent,
    ModalDialog,
    HeaderComponent,
    userAuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    A2tUiModule,
    AppRoutingModule,
    [MaterialModule.forRoot()]
  ],
  entryComponents: [ModalDialog],
  providers: [CatalogsService,
              SettingsService,
              GameService,
              Angular2TokenService,
              DialogsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
