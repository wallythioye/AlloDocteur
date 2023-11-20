import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierConsultationComponent } from './modifier-consultation.component';

describe('ModifierConsultationComponent', () => {
  let component: ModifierConsultationComponent;
  let fixture: ComponentFixture<ModifierConsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifierConsultationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifierConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
