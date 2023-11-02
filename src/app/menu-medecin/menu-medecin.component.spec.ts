import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuMedecinComponent } from './menu-medecin.component';

describe('MenuMedecinComponent', () => {
  let component: MenuMedecinComponent;
  let fixture: ComponentFixture<MenuMedecinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuMedecinComponent]
    });
    fixture = TestBed.createComponent(MenuMedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
