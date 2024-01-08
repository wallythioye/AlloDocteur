import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConnexionService } from 'src/services/connexion.service';

interface SubMenus {
  [key: string]: boolean;
}
@Component({
  selector: 'app-acceuil-admin',
  templateUrl: './acceuil-admin.component.html',
  styleUrls: ['./acceuil-admin.component.scss']
})
export class AcceuilAdminComponent {

  constructor(private connexionService: ConnexionService, private router: Router) {}

  sidebarActive = false;
  mainContentActive = false;
  
  toggleClasses() {
    this.sidebarActive = !this.sidebarActive;
    this.mainContentActive = !this.mainContentActive;
  }

  subMenus: SubMenus = {
    rendezVous: false,
    patients: false,
    specialistes: false,
  };

  toggleSubMenu(menu: string) {
    if (this.subMenus.hasOwnProperty(menu)) {
      this.subMenus[menu] = !this.subMenus[menu];
    }
  }

  // Méthode de déconnexion
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
