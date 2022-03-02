import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaVivenciasComponent } from './alta-vivencias.component';

describe('AltaVivenciasComponent', () => {
  let component: AltaVivenciasComponent;
  let fixture: ComponentFixture<AltaVivenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaVivenciasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaVivenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
