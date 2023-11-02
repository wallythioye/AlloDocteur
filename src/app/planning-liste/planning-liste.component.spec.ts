import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningListeComponent } from './planning-liste.component';

describe('PlanningListeComponent', () => {
  let component: PlanningListeComponent;
  let fixture: ComponentFixture<PlanningListeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanningListeComponent]
    });
    fixture = TestBed.createComponent(PlanningListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
