import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medecin } from 'src/models/medecin';
import { ConnexionService } from './connexion.service';
import { ServeurService } from './serveur.service';

@Injectable({
  providedIn: 'root'
})
export class MedecinService {
  private apiUrl = '';

  constructor(private httpClient: HttpClient,
     private serveurService: ServeurService,
       private connexionService: ConnexionService) 
  {
    this.apiUrl = serveurService.getFullUrl(); 
  }

  getMedecins(): Observable<Medecin[]> {
    
     const headers = this.connexionService.getHeadersWithAuthorization();
    return this.httpClient.get<Medecin[]>(`${this.apiUrl}/medecins`, {headers});
    
  }
  // medecin-service.service.ts
getMedecinss(searchTerm: string = ''): Observable<Medecin[]> {
  const headers = this.connexionService.getHeadersWithAuthorization();
  return this.httpClient.get<Medecin[]>(`${this.apiUrl}/medecins?search=${searchTerm}`, { headers });
}


  ajouterMedecin(nouveauMedecin: Medecin): Observable<Medecin> {
    const token = localStorage.getItem('token');

    const headers = this.connexionService.getHeadersWithAuthorization();

      return this.httpClient.post<Medecin>(`${this.apiUrl}/medecins`, nouveauMedecin, { headers });
}
  
  modifierMedecin(medecinModifie: Medecin): Observable<Medecin> {

    const headers = this.connexionService.getHeadersWithAuthorization();

    return this.httpClient.put<Medecin>(`${this.apiUrl}/medecins/${medecinModifie.id}`, medecinModifie,{headers} );
  }

  findMedecinsBySpecialite(specialite: string): Observable<Medecin[]> {
    const headers = this.connexionService.getHeadersWithAuthorization();
    return this.httpClient.get<Medecin[]>(`${this.apiUrl}/specialite?specialite=${specialite}`, { headers });
  }

  findMedecinByNomAndPrenom(nom: string, prenom: string): Observable<Medecin[]> {
    const headers = this.connexionService.getHeadersWithAuthorization();
    return this.httpClient.get<Medecin[]>(`${this.apiUrl}/medecins?nom=${nom}&prenom=${prenom}`, { headers });
  }

}
