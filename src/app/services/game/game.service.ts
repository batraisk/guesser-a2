import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { ICatalog } from '../../models/interfaces/icatalog';
import { ITask } from '../../models/interfaces/itask';
import { Word } from '../../models/classes/word';
import { SettingsService } from '../../services/settings/settings.service';
import * as _ from "lodash";

import 'rxjs/add/operator/toPromise';

@Injectable()
export class GameService {
  private headers = new Headers({'Content-Type': 'application/json'});
  public task: ITask = null;

  constructor(
    private http: Http, private settings: SettingsService
  ) { }

  getTask(catalogIds: number[]): Promise<ITask>{
    return this.http
               .post(this.settings.getTaskUrl,
               JSON.stringify({'Ids':catalogIds}),
               {headers: this.headers})
        .toPromise()
        .then(response => {this.task = response.json() as ITask;})
        .catch(this.handleError);
  }

  private handleError(error: any): Promise <any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
