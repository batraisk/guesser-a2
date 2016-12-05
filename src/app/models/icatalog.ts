import { Word } from '../word';

export interface ICatalog {
  id: number;
  name: string;
  list: Word[];
}
