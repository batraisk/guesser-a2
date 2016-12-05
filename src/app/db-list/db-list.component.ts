import { Component, Output, Input } from '@angular/core';
import { Word } from '../word';
import { Router }            from '@angular/router';
import { WordService } from '../word.service';
import { AppComponent } from '../app.component';
import { DBCatalogComponent } from './db-catalog.component';
import { ICatalog } from '../models/icatalog'
import { Catalog } from '../models/catalog'


@Component({
  selector: 'db-list',
  templateUrl: './db-list.component.html',
  styleUrls: ['./db-list.component.scss']
})

export class DBListComponent {

  selectedCatalogs: ICatalog[] = [];
  catalogs: ICatalog[] = [];
  list: Word[] = [];
  selectedWord: Word;
  catalogsNames: string = 'All';

  constructor(private wordService: WordService,
              private router: Router) { }

  getWords(): void {
    this.wordService.getWords().then(list => this.list = list);
  }

  add(ru: string, en: string): void {
    ru = ru.trim();
    en = en.trim();
    if (!ru || !en) { return; }
    this.wordService.create(ru, en)
      .then(word => {
        this.list.push(word);
        this.selectedWord = null;
      });
  }

  delete(word: Word): void {
    this.wordService
        .delete(word.id)
        .then(() => {
          this.list = this.list.filter(h => h !== word);
          if (this.selectedWord === word) { this.selectedWord = null; }
        });
  }

  ngOnInit(): void {
    this.getWords();
  }

  onSelect(word: Word): void {
    this.selectedWord = word;
  }

  gotoStart(): void {
    this.router.navigate(['/game']);
  }

  gotoBase(): void {
    this.router.navigate(['/base']);
  }

  upCatalogs(catalogs:ICatalog[]) {
    this.catalogsNames='';
    for (var i = 0; i <= catalogs.length - 1; i+=1) {
      this.catalogsNames += ' '+ catalogs[i].name;
    }
    if(catalogs === []) {
      this.catalogsNames = 'all'
    }
    // this.list.splice(0, this.list.length);
    // this.list = catalogs[0].list.slice(0,catalogs[0].list.length);
  }

}
