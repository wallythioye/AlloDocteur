import { DatePipe } from '@angular/common';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Consultation } from 'src/models/consultation';
import { ServeurService } from './serveur.service';

@Injectable({
  providedIn: 'root'})

export class ConsultationService {
  private apiUrl = '';

  constructor(private httpClient: HttpClient, private datePipe: DatePipe,  private serveurService: ServeurService) {
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
  

  modifierConsultation(id: number, consultation: Consultation): Observable<Consultation> {
    
    const formattedDate = this.datePipe.transform(consultation.date, 'yyyy-MM-dd');
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.httpClient.put<Consultation>(
      `${this.apiUrl}/consultations/${id}`,
      {
        motif: consultation.motif,
        antecedent: consultation.antecedent,
        allergie: consultation.allergie,
        date: formattedDate,
        groupeSanguin: consultation.groupeSanguin,
        diagnostic:  consultation.diagnostic,
        poids:  consultation.poids,
        taille: consultation.taille,
        profession:  consultation.profession
      },
      httpOptions
    );

  }

  getConsultationById(consultationId: number): Observable<Consultation> {
    return this.httpClient.get<Consultation>(`${this.apiUrl}/consultations/${consultationId}`);
  }

  supprimerConsultation(id: number): Observable<void> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      responseType: 'text' as 'json'  // Indique que la réponse attendue n'est pas du JSON mais une simple réponse textuelle.
    };
    return this.httpClient.delete<void>(`${this.apiUrl}/consultations/${id}`, httpOptions)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Erreur lors de la suppression : ', error);
          return throwError('Erreur lors de la suppression.');
        })
      );
  }
}
