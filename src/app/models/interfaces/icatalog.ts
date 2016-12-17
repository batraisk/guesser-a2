import { Word } from '../classes/word';

export interface ICatalog {
  id: number;
  name: string;
  list: Word[];
}
