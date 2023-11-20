import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutRendezvousPatientComponent } from './ajout-rendezvous-patient.component';

describe('AjoutRendezvousPatientComponent', () => {
  let component: AjoutRendezvousPatientComponent;
  let fixture: ComponentFixture<AjoutRendezvousPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjoutRendezvousPatientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjoutRendezvousPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
