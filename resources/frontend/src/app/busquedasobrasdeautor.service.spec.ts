import { TestBed } from '@angular/core/testing';

import { BusquedasobrasdeautorService } from './busquedasobrasdeautor.service';

describe('BusquedasobrasdeautorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BusquedasobrasdeautorService = TestBed.get(BusquedasobrasdeautorService);
    expect(service).toBeTruthy();
  });
});
