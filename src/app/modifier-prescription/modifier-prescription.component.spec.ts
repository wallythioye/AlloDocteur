import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierPrescriptionComponent } from './modifier-prescription.component';

describe('ModifierPrescriptionComponent', () => {
  let component: ModifierPrescriptionComponent;
  let fixture: ComponentFixture<ModifierPrescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifierPrescriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifierPrescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
