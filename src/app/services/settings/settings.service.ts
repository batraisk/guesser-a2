import { Injectable } from '@angular/core';

@Injectable()
export class SettingsService {
  public catalogsUrl: string = 'api/lists';
  public wordsUrl: string = 'api/words';

  constructor() { }

}
