import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeRendezvousPatientComponent } from './liste-rendezvous-patient.component';

describe('ListeRendezvousPatientComponent', () => {
  let component: ListeRendezvousPatientComponent;
  let fixture: ComponentFixture<ListeRendezvousPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeRendezvousPatientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListeRendezvousPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
