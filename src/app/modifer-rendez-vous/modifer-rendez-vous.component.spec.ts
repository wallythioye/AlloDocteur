import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModiferRendezVousComponent } from './modifer-rendez-vous.component';

describe('ModiferRendezVousComponent', () => {
  let component: ModiferRendezVousComponent;
  let fixture: ComponentFixture<ModiferRendezVousComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModiferRendezVousComponent]
    });
    fixture = TestBed.createComponent(ModiferRendezVousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
