import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarVivenciasComponent } from './modificar-vivencias.component';

describe('ModificarVivenciasComponent', () => {
  let component: ModificarVivenciasComponent;
  let fixture: ComponentFixture<ModificarVivenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarVivenciasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarVivenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
