import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaPoblacionesComponent } from './alta-poblaciones.component';

describe('AltaPoblacionesComponent', () => {
  let component: AltaPoblacionesComponent;
  let fixture: ComponentFixture<AltaPoblacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaPoblacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaPoblacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
