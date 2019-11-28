import { TestBed } from '@angular/core/testing';

import { ObrasporidiomaService } from './obrasporidioma.service';

describe('ObrasporidiomaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObrasporidiomaService = TestBed.get(ObrasporidiomaService);
    expect(service).toBeTruthy();
  });
});
