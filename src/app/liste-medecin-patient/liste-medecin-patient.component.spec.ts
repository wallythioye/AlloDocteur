import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeMedecinPatientComponent } from './liste-medecin-patient.component';

describe('ListeMedecinPatientComponent', () => {
  let component: ListeMedecinPatientComponent;
  let fixture: ComponentFixture<ListeMedecinPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeMedecinPatientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeMedecinPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
