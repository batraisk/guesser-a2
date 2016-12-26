import { Injectable } from '@angular/core';

@Injectable()
export class SettingsService {
  public catalogsUrl: string = 'api/lists';
  public wordsUrl: string = 'api/words';
  public gameUrl: string = 'api/games';
  public getTaskUrl: string = 'api/get_task';


  constructor() { }

}
