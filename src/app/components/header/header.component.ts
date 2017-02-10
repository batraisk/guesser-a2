import { Component, OnInit, ViewContainerRef, Input } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { CatalogsService } from '../../services/catalogs/catalogs.service';
import { DialogsService } from '../../services/dialogs/dialogs.service';
import { Angular2TokenService } from '../../services/token.service';

import * as _ from "lodash";
import { ModalDialog } from '../dialogs/modalDialog.component';
import { GameComponent } from '../game/game.component';
import { MdDialogRef } from '@angular/material';
import { MdDialog } from '@angular/material';
import {
    SignInData,
    RegisterData,
    UpdatePasswordData,
    ResetPasswordData,

    UserType,
    UserData,
    AuthData,

    Angular2TokenOptions
} from '../../models/classes/token';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit{
  public editWord;
  private loading: Boolean;
  public selectIndex: number = 0;
  public sidebarEnable: boolean = true;
  public user: UserData;
  @Input() typeHeader: string = 'catalogs';
  dialogRef: MdDialogRef<ModalDialog>;
  result: any

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private catalogService: CatalogsService,
    public dialog: MdDialog,
    private dialogsService: DialogsService,
    private viewContainerRef: ViewContainerRef,
    private _tokenService: Angular2TokenService) {
    switch(window.location.pathname) {
      case '/game':  // if (x === 'value1')
        this.typeHeader = 'game';
        break
      case '/catalogs':  // if (x === 'value2')
        this.typeHeader = 'cat';
        break
      default:
        this.typeHeader = 'cat';
        break
    }
  }

  ngOnInit() {
    this.user = this._tokenService.currentUserData;
  }

  showSidebar(event) {
    this.sidebarEnable = !this.sidebarEnable
  }

  goBack(): void {
    this.location.back();
    console.log(window.location.pathname)
  }

 }
