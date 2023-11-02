import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutDossierMedicalComponent } from './ajout-dossier-medical.component';

describe('AjoutDossierMedicalComponent', () => {
  let component: AjoutDossierMedicalComponent;
  let fixture: ComponentFixture<AjoutDossierMedicalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutDossierMedicalComponent]
    });
    fixture = TestBed.createComponent(AjoutDossierMedicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
