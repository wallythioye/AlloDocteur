import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceuilPatientComponent } from './acceuil-patient.component';

describe('AcceuilPatientComponent', () => {
  let component: AcceuilPatientComponent;
  let fixture: ComponentFixture<AcceuilPatientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcceuilPatientComponent]
    });
    fixture = TestBed.createComponent(AcceuilPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
