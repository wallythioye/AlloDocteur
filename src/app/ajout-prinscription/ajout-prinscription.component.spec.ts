import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutPrinscriptionComponent } from './ajout-prinscription.component';

describe('AjoutPrinscriptionComponent', () => {
  let component: AjoutPrinscriptionComponent;
  let fixture: ComponentFixture<AjoutPrinscriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutPrinscriptionComponent]
    });
    fixture = TestBed.createComponent(AjoutPrinscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
