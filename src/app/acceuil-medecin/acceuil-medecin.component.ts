import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConnexionService } from 'src/services/connexion.service';

@Component({
  selector: 'app-acceuil-medecin',
  templateUrl: './acceuil-medecin.component.html',
  styleUrls: ['./acceuil-medecin.component.scss']
})
export class AcceuilMedecinComponent {
  sidebarActive = false;
  mainContentActive = false;
  subMenus: { [key: string]: boolean } = {};

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

  constructor(private connexionService: ConnexionService, private router: Router) {}

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
