import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { CatalogsService } from '../../services/catalogs/catalogs.service';
import { GameService } from '../../services/game/game.service';
import { CatalogsComponent } from '../catalogs/catalogs.component';
import { Catalog } from '../../models/classes/catalog';
import { Word } from '../../models/classes/word';
import { ICatalog } from '../../models/interfaces/icatalog';
import { ITask } from '../../models/interfaces/itask';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  private catalogs: ICatalog[] = [];
  private activeCatalog: ICatalog;
  private activeCatalogs: ICatalog[] = [];
  private task: ITask;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private catalogService: CatalogsService,
    private gameService: GameService
   ) {
    if (!this.catalogService.catalogs) {
        this.catalogService
            .downloadCatalogs()
            .then(catalogs => {
              this.catalogs = this.catalogService.getCatalogs()
            })
      }
  }

  ngOnInit() {
    this.catalogs = this.catalogService.catalogs;
  }
  goBack(): void {
    this.location.back();
  }

  setCatalog(catalog: ICatalog, event = null): void {
    var indexCatalog = this.activeCatalogs.indexOf(catalog);
    if(indexCatalog === -1) {
      this.activeCatalogs.push(catalog);
    } else {
      this.activeCatalogs.splice(indexCatalog, 1);
    }
    this.getTask(this.activeCatalogs);
  }

  showAll(event): void {
    this.activeCatalogs.splice(0, this.activeCatalogs.length-1)
    //this.activeCatalogs = [];
    var copyCatalogs: Array<Catalog>=[];
    for (var i = 0; i <= this.catalogs.length-1; i++) {
      this.activeCatalogs.push(this.catalogs[i]);
    }
    this.getTask(this.activeCatalogs);
  }

  getTask(catalogs: ICatalog[]): void{
    if (catalogs) {
      let catalogIds: number[] = [];
      for (var i = 0; i <= catalogs.length-1; i++) {
        catalogIds.push(catalogs[i].id);
      }
      this.gameService
          .getTask(catalogIds)
          .then(response => {this.task = this.gameService.task;})
    }
  }

  setAnswer(word: Word): void {
    if(word && this.task) {
      if (word.id === this.task.word.id) {
        console.log('molodca');
      } else {
        console.log('loh');
      }
    }
    this.getTask(this.activeCatalogs);
  }
}
