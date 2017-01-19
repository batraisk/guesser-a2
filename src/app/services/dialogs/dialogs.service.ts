import { Observable } from 'rxjs/Rx';
import { ModalDialog } from '../../components/dialogs/modalDialog.component';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import { Injectable, ViewContainerRef } from '@angular/core';
import { Word } from '../../models/classes/word'


@Injectable()
export class DialogsService {

    constructor(private dialog: MdDialog) { }

    // public confirm(title: string, message: string, viewContainerRef: ViewContainerRef): Observable<boolean> {

    //     let dialogRef: MdDialogRef<ModalDialog>;
    //     let config = new MdDialogConfig();
    //     config.viewContainerRef = viewContainerRef;

    //     dialogRef = this.dialog.open(ModalDialog, config);

    //     dialogRef.componentInstance.title = title;
    //     dialogRef.componentInstance.message = message;

    //     return dialogRef.afterClosed();
    // }

    public confirm(word: Word, viewContainerRef: ViewContainerRef): Observable<boolean> {

        let dialogRef: MdDialogRef<ModalDialog>;
        let config = new MdDialogConfig();
        config.viewContainerRef = viewContainerRef;

        dialogRef = this.dialog.open(ModalDialog, config);

        dialogRef.componentInstance.word = word;

        return dialogRef.afterClosed();
    }
}
