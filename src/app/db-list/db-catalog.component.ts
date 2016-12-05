import { Component, EventEmitter, Output } from '@angular/core';
import { Word } from '../word';
import { Router }            from '@angular/router';
import { WordService } from '../word.service';
import { AppComponent } from '../app.component';
import { ICatalog } from '../models/icatalog';

@Component({
  selector: 'db-catalog',
  templateUrl: './db-catalog.component.html',
  styleUrls: ['./db-catalog.component.scss']
  // outputs: ['selectedCatalogsChanged']
})

export class DBCatalogComponent {

  names: string[] = [];
  catalogs: ICatalog[] = [];
  selectedCatalogs: ICatalog[] = [];
  selectAll: boolean = true;

  @Output() selectedCatalogsChanged = new EventEmitter<ICatalog[]>();
  @Output() getCatalogsList = new EventEmitter<ICatalog[]>();

  constructor(private wordService: WordService,
              private router: Router) { }

  addCatalog(name: string): void {
    name = name.trim();
    this.wordService.createCatalog(name)
      .then(catalog => {
        this.catalogs.push(catalog);
      });
  }

  ngOnInit(): void {
    this.getCatalogs();
    this.getCatalogsList.emit(this.catalogs);
  }
  getCatalogs(): void {
    this.wordService.getCatalogs().then(catalog => this.catalogs = catalog);
  }
  onSelect(catalog: ICatalog): void {
    let index = this.selectedCatalogs.indexOf(catalog);
    if (index === -1) {
      this.selectedCatalogs.push(catalog);
    } else {
      this.selectedCatalogs.splice(index, 1);
    }
    this.selectAll = false;
    this.selectedCatalogsChanged.emit(this.selectedCatalogs);
  }

  onSelectAll(): void {
    this.selectedCatalogs.splice(0, this.catalogs.length);
    this.selectAll = true;
  }
}
