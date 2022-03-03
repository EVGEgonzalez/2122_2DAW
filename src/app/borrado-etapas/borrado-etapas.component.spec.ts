import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorradoEtapasComponent } from './borrado-etapas.component';

describe('BorradoEtapasComponent', () => {
  let component: BorradoEtapasComponent;
  let fixture: ComponentFixture<BorradoEtapasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorradoEtapasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorradoEtapasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
