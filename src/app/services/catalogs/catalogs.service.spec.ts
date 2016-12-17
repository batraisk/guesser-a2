/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CatalogsService } from './catalogs.service';

describe('Service: Catalogs', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CatalogsService]
    });
  });

  it('should ...', inject([CatalogsService], (service: CatalogsService) => {
    expect(service).toBeTruthy();
  }));
});
