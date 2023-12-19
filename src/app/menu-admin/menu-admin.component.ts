import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConnexionService } from 'src/services/connexion.service';

@Component({
  selector: 'menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.scss']
})
export class MenuAdminComponent {
  constructor(private connexionService: ConnexionService, private router: Router) {}

  // Méthode de déconnexion
  logout(): void {
    // Appelez la méthode de déconnexion du service
    this.connexionService.logout().subscribe(
      () => {
        // La déconnexion a réussi, effectuez les actions nécessaires (par exemple, rediriger vers la page de connexion)
        console.log('Déconnexion réussie');
        this.gotoHome();
        // Redirigez l'utilisateur vers la page de connexion ou effectuez d'autres actions nécessaires.
      },
      (error) => {
        console.error('Erreur lors de la déconnexion', error);
        // Gérez l'erreur de déconnexion (par exemple, affichez un message d'erreur à l'utilisateur)
      }
    );
  }


  gotoHome() {
    this.router.navigate(['/']);
  }
}
