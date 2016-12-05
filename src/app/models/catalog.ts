import { ICatalog } from './icatalog'
import { Word } from '../word';

export class Catalog implements ICatalog {
  id: number;
  name: string;
  list: Word[];
}
