import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common'
import { CatalogsService }           from '../../services/catalogs/catalogs.service'
import { ICatalog } from '../../models/interfaces/icatalog'
import { Catalog } from '../../models/classes/catalog';
import { Word } from '../../models/classes/word';
import 'lodash';

@Component({
  selector: 'app-catalogs',
  templateUrl: './catalogs.component.html',
  styleUrls: ['./catalogs.component.scss']
})
export class CatalogsComponent implements OnInit {
private catalogs: ICatalog[] = [];
private activeCatalog: ICatalog;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private catalogService: CatalogsService) {}

  ngOnInit() {
    this.catalogs = this.catalogService.getCatalogs();
  }

  setCatalog(catalog: ICatalog): void {
    var clone = new Catalog;
    for (var key in catalog) {
      clone[key] = catalog[key];
    }
    this.activeCatalog = clone;
  }

  showAll(): void {
    var words: Array<Word>=[];
    for (var i = 0; i <= this.catalogs.length - 1; i++) {
      for (var j = 0; j <= this.catalogs[i].list.length - 1; j++) {
      words.push(this.catalogs[i].list[j]);
      }
    }
    var clone = new Catalog;
    clone.name = 'all'
    clone.list = words;
    this.activeCatalog = clone;
  }

  goBack(): void {
    this.location.back();
  }

}
