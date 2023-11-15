import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePrescriptionComponent } from './liste-prescription.component';

describe('ListePrescriptionComponent', () => {
  let component: ListePrescriptionComponent;
  let fixture: ComponentFixture<ListePrescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListePrescriptionComponent]
    });
    fixture = TestBed.createComponent(ListePrescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
