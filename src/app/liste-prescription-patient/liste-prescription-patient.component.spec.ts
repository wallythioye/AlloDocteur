import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePrescriptionPatientComponent } from './liste-prescription-patient.component';

describe('ListePrescriptionPatientComponent', () => {
  let component: ListePrescriptionPatientComponent;
  let fixture: ComponentFixture<ListePrescriptionPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListePrescriptionPatientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListePrescriptionPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
