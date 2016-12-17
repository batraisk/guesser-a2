import { Injectable, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Word } from '../word';
// import { LIST } from '../mock-words';
import { ITask } from '../models/itask';
import { ICatalog } from '../models/icatalog';

@Injectable()
export class CatalogService implements OnInit{
  private headers = new Headers({'Content-Type': 'application/json'});
  private wordsUrl = 'api/words';  // URL to web api
  private taskUrl = 'api/get_list';
  private catalogsUrl = 'api/lists';
  private catalogs: ICatalog[] = [];

  constructor(private http: Http) {
    this.http.get(this.catalogsUrl)
               .toPromise()
               .then(response => {this.catalogs = response.json() as ICatalog[]})
               .catch(this.handleError);
    // this.getCatalogs();
  }

  ngOnInit() {
    console.log('start');
  }
  getCatalogs() {
    return this.catalogs;
  }

  createCatalog(name:string): Promise<ICatalog> {
    return this.http
      .post(this.catalogsUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }
  // getCatalogs(): Promise<ICatalog[]> {
  //   return this.http.get(this.catalogsUrl)
  //              .toPromise()
  //              .then(response => {this.catalogs = response.json() as ICatalog[]})
  //              .catch(this.handleError);
  // }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
