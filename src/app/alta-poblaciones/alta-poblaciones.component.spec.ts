import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:src/app/alta-poblaciones/alta-poblaciones.component.spec.ts
import { AltaPoblacionesComponent } from './alta-poblaciones.component';

describe('AltaPoblacionesComponent', () => {
  let component: AltaPoblacionesComponent;
  let fixture: ComponentFixture<AltaPoblacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaPoblacionesComponent ]
========
import { FormularioComponent } from './formulario.component';

describe('FormularioComponent', () => {
  let component: FormularioComponent;
  let fixture: ComponentFixture<FormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioComponent ]
>>>>>>>> 0488c346b82f0967a0c3779d780fc4f7a34782db:src/app/formulario/formulario.component.spec.ts
    })
    .compileComponents();
  });

  beforeEach(() => {
<<<<<<<< HEAD:src/app/alta-poblaciones/alta-poblaciones.component.spec.ts
    fixture = TestBed.createComponent(AltaPoblacionesComponent);
========
    fixture = TestBed.createComponent(FormularioComponent);
>>>>>>>> 0488c346b82f0967a0c3779d780fc4f7a34782db:src/app/formulario/formulario.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
