import { TestBed } from '@angular/core/testing';

import { BusquedasobrasService } from './busquedasobras.service';

describe('BusquedasobrasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BusquedasobrasService = TestBed.get(BusquedasobrasService);
    expect(service).toBeTruthy();
  });
});
