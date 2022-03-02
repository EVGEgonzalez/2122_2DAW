import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorradoVivenciasComponent } from './borrado-vivencias.component';

describe('BorradoVivenciasComponent', () => {
  let component: BorradoVivenciasComponent;
  let fixture: ComponentFixture<BorradoVivenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorradoVivenciasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorradoVivenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
