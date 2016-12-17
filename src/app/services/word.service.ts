import { Injectable, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Word } from '../word';
// import { LIST } from '../mock-words';
import { ITask } from '../models/itask';
import { ICatalog } from '../models/icatalog';

@Injectable()
export class WordService implements OnInit{
  private headers = new Headers({'Content-Type': 'application/json'});
  private wordsUrl = 'api/words';  // URL to web api
  private taskUrl = 'api/get_list';
  private catalogsUrl = 'api/lists';

  constructor(private http: Http) { }

  getWords(): Promise<Word[]> {
    return this.http.get(this.wordsUrl)
               .toPromise()
               .then(response => response.json() as Word[])
               .catch(this.handleError);
   // return Promise.resolve(LIST);


  }
  ngOnInit() {
    console.log('start');
  }

  getTask(): Promise<ITask> {
    return this.http.get(this.taskUrl)
               .toPromise()
               .then(response => response.json() as ITask)
               .catch(this.handleError);
  }
  // See the "Take it slow" appendix
  getWordsSlowly(): Promise<Word[]> {
    return new Promise<Word[]>(resolve =>
      setTimeout(resolve, 2000)) // delay 2 seconds
      .then(() => this.getWords());
  }

  create(un: string, ru:string): Promise<Word> {
    return this.http
      .post(this.wordsUrl, JSON.stringify({un: un, ru:ru}), {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  update(word: Word): Promise<Word> {
    const url = `${this.wordsUrl}/${word.id}`;
    return this.http
      .put(url, JSON.stringify(word), {headers: this.headers})
      .toPromise()
      .then(() => word)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.wordsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  getCatalogs(): Promise<ICatalog[]> {
    return this.http.get(this.catalogsUrl)
               .toPromise()
               .then(response => response.json() as ICatalog[])
               .catch(this.handleError);
  }

  createCatalog(name:string): Promise<ICatalog> {
    return this.http
      .post(this.catalogsUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
