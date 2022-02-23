import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarCuadernoComponent } from './mostrar-cuaderno.component';

describe('MostrarCuadernoComponent', () => {
  let component: MostrarCuadernoComponent;
  let fixture: ComponentFixture<MostrarCuadernoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarCuadernoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarCuadernoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
