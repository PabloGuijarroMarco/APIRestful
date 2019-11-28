import { TestBed } from '@angular/core/testing';

import { WikidataService } from './wikidata.service';

describe('WikidataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WikidataService = TestBed.get(WikidataService);
    expect(service).toBeTruthy();
  });
});
