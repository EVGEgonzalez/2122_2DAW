import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarVivenciasComponent } from './consultar-vivencias.component';

describe('ConsultarVivenciasComponent', () => {
  let component: ConsultarVivenciasComponent;
  let fixture: ComponentFixture<ConsultarVivenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarVivenciasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarVivenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
