import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medecin } from 'src/models/medecin';
import { ServeurService } from './serveur.service';

@Injectable({
  providedIn: 'root'
})
export class MedecinService {
  private apiUrl = 'http://localhost:8080/api/medecins';

  constructor(private httpClient: HttpClient, private serveurService: ServeurService) {
       this.apiUrl = serveurService.getFullUrl();
   }

  getMedecins(): Observable<Medecin[]> {
    return this.httpClient.get<Medecin[]>(this.apiUrl+"/medecins");
  }

  ajouterMedecin(nouveauMedecin: Medecin): Observable<Medecin> {
    return this.httpClient.post<Medecin>(this.apiUrl, nouveauMedecin, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  modifierMedecin(medecinModifie: Medecin): Observable<Medecin> {
    return this.httpClient.put<Medecin>(`${this.apiUrl}/${medecinModifie.id}`, medecinModifie, {
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
