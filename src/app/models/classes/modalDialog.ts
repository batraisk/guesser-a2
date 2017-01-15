import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'pizza-dialog',
  template: `
  <h1 md-dialog-title>Would you like to order pizza?</h1>

  <md-dialog-actions>
    <button (click)="dialogRef.close('yes')">Yes</button>
    <button md-dialog-close>No</button>
  </md-dialog-actions>
  `
})
export class ModalDialog {
  constructor(public dialogRef: MdDialogRef<ModalDialog>) { }
}
