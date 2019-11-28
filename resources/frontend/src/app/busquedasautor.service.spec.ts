import { TestBed } from '@angular/core/testing';

import { BusquedasautorService } from './busquedasautor.service';

describe('BusquedasautorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BusquedasautorService = TestBed.get(BusquedasautorService);
    expect(service).toBeTruthy();
  });
});
