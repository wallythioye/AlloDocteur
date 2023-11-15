import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consultation } from 'src/models/consultation';
import { ServeurService } from './serveur.service';

@Injectable({
  providedIn: 'root'
})
export class ConsultationService {
  private apiUrl = '';

  constructor(private httpClient: HttpClient, private serveurService: ServeurService) {
    this.apiUrl = serveurService.getFullUrl();
  }

  getListeConsultations(): Observable<Consultation[]> {
    return this.httpClient.get<Consultation[]>(this.apiUrl+'/consultations');
  }

  ajouterConsultation(nouvelleConsultation: Consultation): Observable<Consultation> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.httpClient.post<Consultation>(this.apiUrl+'/consultations', nouvelleConsultation, httpOptions);

  }

  modifierConsultation(consultation: Consultation): Observable<Consultation> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.httpClient.put<Consultation>(this.apiUrl+'/consultations'+'/consultation.id', consultation, httpOptions);
  }
}
