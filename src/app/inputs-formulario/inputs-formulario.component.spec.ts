import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputsFormularioComponent } from './inputs-formulario.component';

describe('InputsFormularioComponent', () => {
  let component: InputsFormularioComponent;
  let fixture: ComponentFixture<InputsFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputsFormularioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputsFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
