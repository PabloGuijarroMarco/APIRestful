import { TestBed } from '@angular/core/testing';

import { PredicciontiempoService } from './predicciontiempo.service';

describe('PredicciontiempoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PredicciontiempoService = TestBed.get(PredicciontiempoService);
    expect(service).toBeTruthy();
  });
});
