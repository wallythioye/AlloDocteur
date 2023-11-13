import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {
  private isLoggedIn: boolean = false;
  private profil: string = ''; // Ajout de la propriété pour stocker le type d'utilisateur

  constructor() { }

  login(username: string, password: string, profil: string): boolean {
    // Ajout du paramètre userType pour spécifier le type d'utilisateur lors de la connexion
    if (username === 'utilisateur' && password === 'motdepasse') {
      this.isLoggedIn = true;
      this.profil = profil; // Stockage du type d'utilisateur lors de la connexion réussie
      return true; // Connexion réussie
    } else {
      this.isLoggedIn = false;
      this.profil = ''; // Réinitialisation du type d'utilisateur en cas d'échec de connexion
      return false; // Connexion échouée
    }
  }

  logout(): void {
    this.isLoggedIn = false;
    this.profil = ''; // Réinitialisation du type d'utilisateur lors de la déconnexion
    // Deconnexion
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  getUserType(): string {
    return this.profil;
  }
}
