import { TestBed } from '@angular/core/testing';

import { Alta } from './alta.service';

describe('Alta', () => {
  let service: Alta;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Alta);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
