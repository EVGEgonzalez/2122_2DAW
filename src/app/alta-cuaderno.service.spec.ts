import { TestBed } from '@angular/core/testing';

import { AltaCuadernoService } from './alta-cuaderno.service';

describe('AltaCuadernoService', () => {
  let service: AltaCuadernoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AltaCuadernoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
