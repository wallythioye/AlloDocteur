import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {
  private isLoggedIn: boolean = false;

  constructor() { }

  login(username: string, password: string): boolean {
    
    if (username === 'utilisateur' && password === 'motdepasse') {
      this.isLoggedIn = true;
      return true; // Connexion réussie
    } else {
      this.isLoggedIn = false;
      return false; // Connexion échouée
    }
  }

  logout(): void {  
    this.isLoggedIn = false;
    
  }

  isAuthenticated(): boolean {
    // Méthode pour vérifier l'état de connexion
    return this.isLoggedIn;
  }
}
