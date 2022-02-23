import { TestBed } from '@angular/core/testing';

import { MostrarCuadernoService } from './mostrar-cuaderno.service';

describe('MostrarCuadernoService', () => {
  let service: MostrarCuadernoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MostrarCuadernoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
