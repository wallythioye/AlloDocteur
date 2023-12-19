import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutPatientAdminComponent } from './ajout-patient-admin.component';

describe('AjoutPatientAdminComponent', () => {
  let component: AjoutPatientAdminComponent;
  let fixture: ComponentFixture<AjoutPatientAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjoutPatientAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjoutPatientAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
