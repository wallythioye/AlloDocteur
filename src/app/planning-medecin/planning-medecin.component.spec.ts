import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningMedecinComponent } from './planning-medecin.component';

describe('PlanningMedecinComponent', () => {
  let component: PlanningMedecinComponent;
  let fixture: ComponentFixture<PlanningMedecinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanningMedecinComponent]
    });
    fixture = TestBed.createComponent(PlanningMedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
