import { TestBed } from '@angular/core/testing';

import { BusquedasinternetService } from './busquedasinternet.service';

describe('BusquedasinternetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BusquedasinternetService = TestBed.get(BusquedasinternetService);
    expect(service).toBeTruthy();
  });
});
