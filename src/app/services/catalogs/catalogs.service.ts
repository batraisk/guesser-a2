import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { ICatalog } from '../../models/interfaces/icatalog'
import { Word } from '../../models/classes/word'
import { Settings } from '../../settings/settings'

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CatalogsService {
  private catalogs: ICatalog[] = [];

  constructor(private http: Http, private settings: Settings) {
    http.get(this.settings.catalogsUrl)
        .toPromise()
        .then(response => {this.catalogs = response.json() as ICatalog[]})
        .catch(this.handleError);
  }

  getCatalogs(): ICatalog[] {
    return this.catalogs;
  }



  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}