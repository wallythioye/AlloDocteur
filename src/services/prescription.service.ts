import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Prescription } from 'src/models/prescription';
import { ServeurService } from './serveur.service';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {
  private apiUrl = 'http://localhost:8080/api/prescription';

  constructor(private httpClient: HttpClient, private serveurService: ServeurService) { 
      this.apiUrl = serveurService.getFullUrl();
  }

  getPrescription(): Observable<Prescription[]> {
    return this.httpClient.get<Prescription[]>(this.apiUrl+"/prescriptions");
  }

  ajouterPrescription(prescription: Prescription): Observable<Prescription> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.httpClient.post<Prescription>(this.apiUrl, prescription, httpOptions);
  }

  modifierPrescription(prescription: Prescription): Observable<Prescription> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.httpClient.put<Prescription>(`${this.apiUrl}/${prescription.id}`, prescription, httpOptions);
  }
}