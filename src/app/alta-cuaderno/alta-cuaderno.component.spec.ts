import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaCuadernoComponent } from './alta-cuaderno.component';

describe('AltaCuadernoComponent', () => {
  let component: AltaCuadernoComponent;
  let fixture: ComponentFixture<AltaCuadernoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaCuadernoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaCuadernoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
