import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from 'src/models/patient';
import { ConnexionService } from './connexion.service';
import { ServeurService } from './serveur.service';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private apiUrl = '';
  private apiInscrire = '';


  constructor(private httpClient: HttpClient,
     private serveurService: ServeurService,
    private connexionService: ConnexionService)
  {
    this.apiUrl = serveurService.getFullUrl();
    this.apiInscrire = serveurService.getLoginUrl();
  }

  getPatients(): Observable<Patient[]> {
    
    const headers = this.connexionService.getHeadersWithAuthorization();

    return this.httpClient.get<Patient[]>(`${this.apiUrl}/patients`, { headers });
  
}
  
  inscription(nouveauPatient: Patient): Observable<Patient> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    
    return this.httpClient.post<Patient>(`${this.apiInscrire}/auth/inscriptionPatient`, nouveauPatient , {headers});
  
}
  ajouterPatient(nouveauPatient: Patient): Observable<Patient> {

    const headers = this.connexionService.getHeadersWithAuthorization();
    
    return this.httpClient.post<Patient>(`${this.apiUrl}/patients`, nouveauPatient , {headers});
  
}

  modifierPatient(patient: Patient): Observable<Patient> {
    
    const headers = this.connexionService.getHeadersWithAuthorization();

    return this.httpClient.put<Patient>(`${this.apiUrl}/patients/${patient.id}`, patient, { headers });
  }

}
