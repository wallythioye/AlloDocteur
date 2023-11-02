import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPatientComponent } from './menu-patient.component';

describe('MenuPatientComponent', () => {
  let component: MenuPatientComponent;
  let fixture: ComponentFixture<MenuPatientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuPatientComponent]
    });
    fixture = TestBed.createComponent(MenuPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
