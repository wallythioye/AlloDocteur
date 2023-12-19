import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConnexionService } from 'src/services/connexion.service';

@Component({
  selector: 'menu-medecin',
  templateUrl: './menu-medecin.component.html',
  styleUrls: ['./menu-medecin.component.scss']
})
export class MenuMedecinComponent {

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
