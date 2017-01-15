import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { CatalogsService } from '../../services/catalogs/catalogs.service';
import { ICatalog } from '../../models/interfaces/icatalog';
import { Catalog } from '../../models/classes/catalog';
import { Word } from '../../models/classes/word';
import * as _ from "lodash";
import { ModalDialog } from '../../models/classes/modalDialog';
import { MdDialogRef } from '@angular/material';
import { MdDialog } from '@angular/material';

@Component({
  selector: 'app-catalogs',
  templateUrl: './catalogs.component.html',
  styleUrls: ['./catalogs.component.scss']
})
export class CatalogsComponent implements OnInit {
private catalogs: ICatalog[] = null;
private activeCatalog: ICatalog;
private editEn: Catalog;
private editRu: Catalog;
private editCatalog: Catalog; // выбранный каталог
private enableCatalog: Catalog; // каталог который выбрали для редактирования
public editWord;
private loading: Boolean;
public selectIndex: number = 0;
dialogRef: MdDialogRef<ModalDialog>;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private catalogService: CatalogsService,
    public dialog: MdDialog) {
  }

  openDialog() {
    this.dialogRef = this.dialog.open(ModalDialog, {
      disableClose: false
    });

    this.dialogRef.afterClosed().subscribe(result => {
      console.log('result: ' + result);
      this.dialogRef = null;
    });
  }

  ngOnInit() {
    if(!this.catalogs) {
      // code...
      this.loading = true;
      this.catalogService
          .downloadCatalogs()
          .then(catalogs => {this.catalogs = this.catalogService.getCatalogs();
                             this.loading = false})
    }
    // this.catalogs = this.catalogService.catalogs;
    // this.catalogs = this.catalogService.getCatalogs();
  }

  show(event){
    console.log(event);
  }

  setCatalog(catalog: ICatalog, event = null): void {
    var clone = new Catalog;
    for (var key in catalog) {
      clone[key] = catalog[key];
    }
    this.activeCatalog = clone;
    this.selectIndex = this.catalogs.indexOf(catalog) + 1;
  }

  addCatalog(name: string): void {
    this.catalogService.addCatalogs(name)
        .then(response => {this.setCatalog(response)});
  }

  updateCatalog(oldCatalog: Catalog, newCatalog: Catalog): void {
    this.catalogService.updateCatalog(oldCatalog, newCatalog)
        .then(response => {});
  }

  deleteCatalog(catalog: Catalog): void {
    this.catalogService.deleteCatalog(catalog);
    this.addCatalog = null;
  }

  addWord(wordEn: string, wordRn: string, catalgId: number): void {
    let newWord = new Word;
    newWord.un = wordEn;
    newWord.ru = wordRn;
    newWord.list_id = catalgId;
    this.catalogService.addWord(newWord)
        .then(response => {});
  }

  updateWord(word: Word): void {
    this.catalogService.updateWord(word)
        .then(response => {});
  }

  deleteWord(word: Word): void {
    this.catalogService.deleteWord(word);
  }

  showAll(event): void {
    var words: Array<Word>=[];
    for (var i = 0; i <= this.catalogs.length - 1; i++) {
      for (var j = 0; j <= this.catalogs[i].list.length - 1; j++) {
      words.push(this.catalogs[i].list[j]);
      }
    }
    var clone = new Catalog;
    clone.name = 'all'
    clone.list = words;
    clone.id = -1;
    this.activeCatalog = clone;
  }

  catalogEditForm(catalog: Catalog): void {
    var clone = new Catalog;
    this.enableCatalog = catalog;
    this.editCatalog = null;
    this.editWord = null;
    for (var key in catalog) {
      clone[key] = catalog[key];
    }
    this.editCatalog = clone;
  }

  wordEditForm(word: Word): void {
    var clone = new Word;
    this.editWord = null;
    this.editCatalog = null;
    for (var key in word) {
      clone[key] = word[key];
    }
    this.editWord = clone;
  }

  goBack(): void {
    this.location.back();
  }

}
