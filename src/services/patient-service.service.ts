import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utilisateur } from 'src/models/utilisateur';
import { ServeurService } from './serveur.service';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private apiUrl = 'http://localhost:8080/api/patients';

  constructor(private httpClient: HttpClient, private serveurService: ServeurService) {
    this.apiUrl = serveurService.getFullUrl();
  }

  getPatients(): Observable<Utilisateur[]> {
    return this.httpClient.get<Utilisateur[]>(`${this.apiUrl}/patients`);
  }

  ajouterPatient(nouveauPatient: Utilisateur): Observable<Utilisateur> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.httpClient.post<Utilisateur>(this.apiUrl, nouveauPatient, httpOptions);
  }

  modifierPatient(patient: Utilisateur): Observable<Utilisateur> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.httpClient.put<Utilisateur>(`${this.apiUrl}/${patient.id}`, patient, httpOptions);
  }
}
