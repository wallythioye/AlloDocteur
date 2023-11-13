import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConnexionService } from 'src/services/connexion.service';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent {
  username: string = '';
  password: string = '';
  profil: string ='';
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private connexionService: ConnexionService, private router: Router) {}

  login(): void {
    if (this.username && this.password) {
      const success = this.connexionService.login(this.username, this.password, this.profil);

      if (success) {
        this.successMessage = 'Connexion réussie. Redirection en cours...';

        const userType = this.connexionService.getUserType();

        switch (userType) {
          case 'admin':
            this.router.navigate(['/admin']);
            break;
          case 'patient':
            this.router.navigate(['/patient']);
            break;
          case 'medecin':
            this.router.navigate(['/medecin']);
            break;
          default:
          
            this.router.navigate(['/']);
            break;
        }
      } else {
        this.errorMessage = 'Identifiants incorrects. Veuillez réessayer.';
      }
    } else {
      this.errorMessage = 'Veuillez remplir tous les champs.';
    }
  }
  //infobib
  //spring scrol
  //crontab guru
  logout(): void {
    this.connexionService.logout();
    this.successMessage = 'Déconnexion réussie.';
    this.router.navigate(['/']);
  }

  isAuthenticated(): boolean {
    return this.connexionService.isAuthenticated();
  }
}
