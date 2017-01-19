import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { Word } from '../../models/classes/word';

@Component({
  selector: 'pizza-dialog',
  template: `
  <md-input-container>
    <input type="text" [(ngModel)]="word.un"
           md-input placeholder="En">
  </md-input-container>
  <md-input-container>
    <input type="text" [(ngModel)]="word.ru"
           md-input placeholder="Ru">
  </md-input-container>


  <md-dialog-actions>
    <button md-button (click)="dialogRef.close(this.word)">Save</button>
    <button md-button md-dialog-close>Cancel</button>
  </md-dialog-actions>
  `
})
export class ModalDialog {
  constructor(public dialogRef: MdDialogRef<ModalDialog>) { }
  public title: string;
  public message: string;
  public word: Word;
}
