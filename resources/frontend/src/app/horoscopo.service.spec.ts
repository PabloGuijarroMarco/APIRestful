import { TestBed } from '@angular/core/testing';

import { HoroscopoService } from './horoscopo.service';

describe('HoroscopoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HoroscopoService = TestBed.get(HoroscopoService);
    expect(service).toBeTruthy();
  });
});
