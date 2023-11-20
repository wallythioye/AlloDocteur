import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierPlanningComponent } from './modifier-planning.component';

describe('ModifierPlanningComponent', () => {
  let component: ModifierPlanningComponent;
  let fixture: ComponentFixture<ModifierPlanningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifierPlanningComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifierPlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
