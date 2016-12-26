import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { ICatalog } from '../../models/interfaces/icatalog';
import { Word } from '../../models/classes/word';
import { SettingsService } from '../../services/settings/settings.service';
import * as _ from "lodash";

import 'rxjs/add/operator/toPromise';
//import { List } from 'linqts';

@Injectable()
export class CatalogsService {
  public catalogs: ICatalog[] = null;
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http, private settings: SettingsService) {
    this.http.get(this.settings.catalogsUrl)
        .toPromise()
        .then(response => {this.catalogs = response.json() as ICatalog[]})
        .catch(this.handleError);
  }

  getCatalogs(): ICatalog[] {
    return this.catalogs;
  }

  downloadCatalogs(): Promise<ICatalog[]> {
    return this.http.get(this.settings.catalogsUrl)
        .toPromise()
        .then(response => {this.catalogs = response.json() as ICatalog[]})
        .catch(this.handleError);
  }

  addCatalogs(name: string): Promise<ICatalog> {
    return this.http
               .post(this.settings.catalogsUrl,
                     JSON.stringify({name: name}),
                     {headers: this.headers})
               .toPromise()
               .then(response => {
                 this.catalogs.push(response.json() as ICatalog);

               })
               .catch(this.handleError);
  }

  deleteCatalog(catalog: ICatalog): void {
    const url = `${'api/lists'}/${catalog.id}`;
    this.http.delete(url, {headers: this.headers})
        .toPromise()
        .then(response => {
          this.catalogs.splice(this.catalogs.indexOf(catalog), 1);
        })
        .catch(this.handleError);
  }

  updateCatalog(oldCatalog: ICatalog, newCatalog: ICatalog): Promise<ICatalog> {
    const url = `${this.settings.catalogsUrl}/${oldCatalog.id}`;
    var indexCat = this.catalogs.indexOf(oldCatalog);
    return this.http
               .put(url,
                    JSON.stringify(newCatalog),
                    {headers: this.headers})
               .toPromise()
               .then(response => {
                 var newCatalog = response.json() as ICatalog;
                   this.catalogs[indexCat] = newCatalog;
               })
               .catch(this.handleError);

  }

  addWord(word: Word): Promise<Word> {
    return this.http
               .post(this.settings.wordsUrl,
                     JSON.stringify(word),
                     {headers: this.headers})
               .toPromise()
               .then(response => {
                 var newWord = response.json() as Word;
                 var catalog = _.findLast(this.catalogs, { 'id': word.list_id})
                 catalog.list.push(newWord);
                // console.log(_.find(this.catalogs, { 'id': word.list_id}));
               })
               .catch(this.handleError);
  }

  updateWord(word: Word): Promise<Word> {
    const url = `${this.settings.wordsUrl}/${word.id}`;
    return this.http
               .put(url,
                    JSON.stringify(word),
                    {headers: this.headers})
               .toPromise()
               .then(response => {
                 var newWord = response.json() as Word;
                 var catalog =
                   _.findLast(this.catalogs, { 'id': newWord.list_id});
                 var indexCatalog = this.catalogs.indexOf(catalog);
                 var editWord = _.findLast(catalog.list, { 'id': newWord.id});
                 var indexWord =
                   this.catalogs[indexCatalog].list.indexOf(editWord);
                 this.catalogs[indexCatalog].list[indexWord] = newWord;
               })
               .catch(this.handleError);
  }

  deleteWord(word: Word): void {
    const url = `${this.settings.wordsUrl}/${word.id}`;
    this.http.delete(url, {headers: this.headers})
        .toPromise()
        .then(response => {
          var catalog = _.findLast(this.catalogs, { 'id': word.list_id})
          catalog.list.splice(catalog.list.indexOf(word), 1);
        })
        .catch(this.handleError);
  }

  private handleError(error: any): Promise <any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
