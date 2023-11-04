import { Component } from '@angular/core';
import { ConnexionService } from 'src/services/connexion.service';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private connexionService: ConnexionService) {}

  login(): void {
    if (this.username && this.password) {
      const success = this.connexionService.login(this.username, this.password);
      if (success) {
        this.successMessage = 'Connexion réussie.';
        // Redirection ou autre traitement après la connexion réussie
      } else {
        this.errorMessage = 'Identifiants incorrects. Veuillez réessayer.';
      }
    } else {
      this.errorMessage = 'Veuillez remplir tous les champs.';
    }
  }

  logout(): void {
    this.connexionService.logout();
    this.successMessage = 'Déconnexion réussie.';
    // Autres traitements ou redirection après la déconnexion
  }

  isAuthenticated(): boolean {
    return this.connexionService.isAuthenticated();
  }
}
