import { Word } from '../classes/word';

export class Catalog {
  id: number;
  name: string;
  list: Word[];

  public clone(): Catalog {
    let catalog: Catalog = new Catalog();
    Object.assign(catalog, this);
    return catalog;
  }
}

