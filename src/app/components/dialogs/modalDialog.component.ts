import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { Word } from '../../models/classes/word';
import { Catalog } from '../../models/classes/catalog';

@Component({
  selector: 'pizza-dialog',
  templateUrl: './modalDialog.component.html'
})
export class ModalDialog {
  constructor(public dialogRef: MdDialogRef<ModalDialog>) { }
  public title: string;
  public message: string;
  public word: Word;
  public catalog: Catalog;
}
