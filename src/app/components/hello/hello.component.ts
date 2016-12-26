import { Component, OnInit } from '@angular/core';
import { CatalogsService } from '../../services/catalogs/catalogs.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {

  constructor(private catalogService: CatalogsService) {
    // this.catalogService
    //       .downloadCatalogs()
    //       .then(catalogs => {})
  }

  ngOnInit() {

  }

}
