import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common'
import { CatalogsService }           from '../../services/catalogs/catalogs.service'
import { ICatalog } from '../../models/interfaces/icatalog'
import { Word } from '../../models/classes/word'

@Component({
  selector: 'app-catalogs',
  templateUrl: './catalogs.component.html',
  styleUrls: ['./catalogs.component.scss']
})
export class CatalogsComponent implements OnInit {
private catalogs: ICatalog[] = [];
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private catalogService: CatalogsService) { }

  ngOnInit() {
    this.catalogs = this.catalogService.getCatalogs();
  }

  goBack(): void {
    this.location.back();
  }

}
