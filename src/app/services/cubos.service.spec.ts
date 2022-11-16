import { TestBed } from '@angular/core/testing';

import { CubosService } from './cubos.service';

describe('CubosService', () => {
  let service: CubosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CubosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
