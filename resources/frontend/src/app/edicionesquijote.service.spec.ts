import { TestBed } from '@angular/core/testing';

import { EdicionesquijoteService } from './edicionesquijote.service';

describe('EdicionesquijoteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EdicionesquijoteService = TestBed.get(EdicionesquijoteService);
    expect(service).toBeTruthy();
  });
});
