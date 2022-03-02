import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarVivenciasComponent } from './listar-vivencias.component';

describe('ListarVivenciasComponent', () => {
  let component: ListarVivenciasComponent;
  let fixture: ComponentFixture<ListarVivenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarVivenciasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarVivenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
