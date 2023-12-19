import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutPatientMedecinComponent } from './ajout-patient-medecin.component';

describe('AjoutPatientMedecinComponent', () => {
  let component: AjoutPatientMedecinComponent;
  let fixture: ComponentFixture<AjoutPatientMedecinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjoutPatientMedecinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjoutPatientMedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
