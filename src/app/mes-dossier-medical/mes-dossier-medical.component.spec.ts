import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesDossierMedicalComponent } from './mes-dossier-medical.component';

describe('MesDossierMedicalComponent', () => {
  let component: MesDossierMedicalComponent;
  let fixture: ComponentFixture<MesDossierMedicalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MesDossierMedicalComponent]
    });
    fixture = TestBed.createComponent(MesDossierMedicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
