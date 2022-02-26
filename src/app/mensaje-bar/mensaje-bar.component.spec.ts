import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajeBarComponent } from './mensaje-bar.component';

describe('MensajeBarComponent', () => {
  let component: MensajeBarComponent;
  let fixture: ComponentFixture<MensajeBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensajeBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MensajeBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
