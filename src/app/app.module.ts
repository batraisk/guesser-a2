import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CatalogsComponent } from './components/catalogs/catalogs.component';
import { CatalogsService } from './services/catalogs/catalogs.service';
import { SettingsService } from './services/settings/settings.service';

import { AppRoutingModule }     from './app-routing.module';
import { HelloComponent } from './components/hello/hello.component';
import { Word } from './models/classes/word';
import { Catalog } from './models/classes/catalog';
import { ICatalog } from './models/interfaces/icatalog';
import * as _ from "lodash";

@NgModule({
  declarations: [
    AppComponent,
    CatalogsComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [CatalogsService, SettingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
