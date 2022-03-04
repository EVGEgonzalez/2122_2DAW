import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarEtapaComponent } from './modificar-etapa.component';

describe('ModificarEtapaComponent', () => {
  let component: ModificarEtapaComponent;
  let fixture: ComponentFixture<ModificarEtapaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarEtapaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarEtapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
