import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutRendezvousMedecinComponent } from './ajout-rendezvous-medecin.component';

describe('AjoutRendezvousMedecinComponent', () => {
  let component: AjoutRendezvousMedecinComponent;
  let fixture: ComponentFixture<AjoutRendezvousMedecinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutRendezvousMedecinComponent]
    });
    fixture = TestBed.createComponent(AjoutRendezvousMedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
