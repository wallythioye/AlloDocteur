import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeConsultationPatientComponent } from './liste-consultation-patient.component';

describe('ListeConsultationPatientComponent', () => {
  let component: ListeConsultationPatientComponent;
  let fixture: ComponentFixture<ListeConsultationPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeConsultationPatientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeConsultationPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
