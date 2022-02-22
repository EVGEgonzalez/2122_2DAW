import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarCuadernoComponent } from './eliminar-cuaderno.component';

describe('EliminarCuadernoComponent', () => {
  let component: EliminarCuadernoComponent;
  let fixture: ComponentFixture<EliminarCuadernoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarCuadernoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarCuadernoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
