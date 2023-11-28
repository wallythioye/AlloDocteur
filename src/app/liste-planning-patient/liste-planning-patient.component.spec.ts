import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePlanningPatientComponent } from './liste-planning-patient.component';

describe('ListePlanningPatientComponent', () => {
  let component: ListePlanningPatientComponent;
  let fixture: ComponentFixture<ListePlanningPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListePlanningPatientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListePlanningPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
