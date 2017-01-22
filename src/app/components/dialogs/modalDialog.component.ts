import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { Word } from '../../models/classes/word';
import { Catalog } from '../../models/classes/catalog';
import { CatalogsService } from '../../services/catalogs/catalogs.service';

@Component({
  selector: 'pizza-dialog',
  templateUrl: './modalDialog.component.html',
  styleUrls: ['./modalDialog.component.scss']
})
export class ModalDialog {
  constructor(public dialogRef: MdDialogRef<ModalDialog>,
              private catalogService: CatalogsService) { }
  public title: string;
  public message: string;
  public word: Word;
  public catalog: Catalog;
  public countWord: number;

  deleteCatalog(catalog: Catalog): void {
    this.catalogService.deleteCatalog(catalog);
  }
}
