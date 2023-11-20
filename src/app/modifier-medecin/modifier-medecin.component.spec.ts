import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierMedecinComponent } from './modifier-medecin.component';

describe('ModifierMedecinComponent', () => {
  let component: ModifierMedecinComponent;
  let fixture: ComponentFixture<ModifierMedecinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifierMedecinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifierMedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
