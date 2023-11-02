import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DossierMedicale } from 'src/models/dossierMedicale';
import { ServeurService } from './serveur.service';
 
@Injectable({
  providedIn: 'root'
})
export class DossierMedicalServiceService {
  private apiUrl = 'http://localhost:8080/api/dossiersMedicale'; 

  constructor(private httpClient: HttpClient, private serveurService: ServeurService) {
      this.apiUrl = serveurService.getFullUrl();
  }

  getDossierMedical(): Observable<DossierMedicale[]> {
    return this.httpClient.get<DossierMedicale[]>(this.apiUrl+"/dossiersMedicales");
  }

  ajoutDossierMedical(dossierMedical: DossierMedicale): Observable<DossierMedicale> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.httpClient.post<DossierMedicale>(`${this.apiUrl}`, dossierMedical, httpOptions);
  }

  modifierDossierMedical(dossierMedical: DossierMedicale): Observable<DossierMedicale> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.httpClient.put<DossierMedicale>(`${this.apiUrl}/${dossierMedical.id}`, dossierMedical, httpOptions);
  }
}
