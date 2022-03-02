import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarEtapaComponent } from './borrar-etapa.component';

describe('BorrarEtapaComponent', () => {
  let component: BorrarEtapaComponent;
  let fixture: ComponentFixture<BorrarEtapaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrarEtapaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarEtapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
