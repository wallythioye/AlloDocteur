import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutConsultationComponent } from './ajout-consultation.component';

describe('AjoutConsultationComponent', () => {
  let component: AjoutConsultationComponent;
  let fixture: ComponentFixture<AjoutConsultationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutConsultationComponent]
    });
    fixture = TestBed.createComponent(AjoutConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
