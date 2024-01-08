import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierRendezvousPatientComponent } from './modifier-rendezvous-patient.component';

describe('ModifierRendezvousPatientComponent', () => {
  let component: ModifierRendezvousPatientComponent;
  let fixture: ComponentFixture<ModifierRendezvousPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifierRendezvousPatientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifierRendezvousPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
