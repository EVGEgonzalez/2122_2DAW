import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarCuadernoComponent } from './modificar-cuaderno.component';

describe('ModificarCuadernoComponent', () => {
  let component: ModificarCuadernoComponent;
  let fixture: ComponentFixture<ModificarCuadernoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarCuadernoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarCuadernoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
