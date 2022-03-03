import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescargarCuadernoComponent } from './descargar-cuaderno.component';

describe('DescargarCuadernoComponent', () => {
  let component: DescargarCuadernoComponent;
  let fixture: ComponentFixture<DescargarCuadernoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescargarCuadernoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescargarCuadernoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
