import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ConnexionService } from 'src/services/connexion.service';

@Component({
  selector: 'app-acceuil-patient',
  templateUrl: './acceuil-patient.component.html',
  styleUrls: ['./acceuil-patient.component.scss']
})
export class AcceuilPatientComponent {

  constructor(private connexionService: ConnexionService, private router: Router) {}
  
  @ViewChild('carousel', { static: true }) carousel!: ElementRef;

  activeSlideIndex = 0; // Indice de la diapositive active

  sidebarActive = false;
  mainContentActive = false;
  subMenus: { [key: string]: boolean } = {};

  // constructor(private renderer: Renderer2) {}


  toggleClasses() {
    this.sidebarActive = !this.sidebarActive;
    this.mainContentActive = !this.mainContentActive;
  }

  toggleSubMenu(menu: string) {
    if (this.subMenus[menu] === undefined) {
      this.subMenus[menu] = true;
    } else {
      this.subMenus[menu] = !this.subMenus[menu];
    }
  }

  nextSlide() {
    const totalSlides = this.carousel.nativeElement.querySelectorAll('.carousel-item').length;
    this.activeSlideIndex = (this.activeSlideIndex + 1) % totalSlides;
    this.updateSlideClasses();
  }

  prevSlide() {
    const totalSlides = this.carousel.nativeElement.querySelectorAll('.carousel-item').length;
    this.activeSlideIndex = (this.activeSlideIndex - 1 + totalSlides) % totalSlides;
    this.updateSlideClasses();
  }

  updateSlideClasses() {
    const slides = this.carousel.nativeElement.querySelectorAll('.carousel-item');
    slides.forEach((slide: HTMLElement, index: number) => {
      if (index === this.activeSlideIndex) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });
  }


  logout(): void {
    this.connexionService.logout().subscribe(
      () => {
        console.log('Déconnexion réussie');
        this.gotoHome();
      },
      (error) => {
        console.error('Erreur lors de la déconnexion', error);
      }
    );
  }


  gotoHome() {
    this.router.navigate(['/']);
  }

}
