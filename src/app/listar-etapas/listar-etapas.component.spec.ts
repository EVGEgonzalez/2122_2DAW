import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEtapasComponent } from './listar-etapas.component';

describe('ListarEtapasComponent', () => {
  let component: ListarEtapasComponent;
  let fixture: ComponentFixture<ListarEtapasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarEtapasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarEtapasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
