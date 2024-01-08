import { DatePipe } from '@angular/common';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, throwError } from 'rxjs';
import { Consultation } from 'src/models/consultation';
import { ServeurService } from './serveur.service';
import { ConnexionService } from './connexion.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'})

export class ConsultationService {
  private apiUrl = '';

  constructor(private httpClient: HttpClient, private datePipe: DatePipe,  private serveurService: ServeurService,  private connexionService: ConnexionService, private router: Router) {
    this.apiUrl = serveurService.getFullUrl();
  }

  getListeConsultations(): Observable<Consultation[]> {

    const headers = this.connexionService.getHeadersWithAuthorization();

    return this.httpClient.get<Consultation[]>(this.apiUrl+'/consultations', { headers });
  }

  ajouterConsultation(nouvelleConsultation: Consultation): Observable<Consultation> {
    
    const headers = this.connexionService.getHeadersWithAuthorization();
  
      return this.httpClient.post<Consultation>(this.apiUrl+'/consultations',nouvelleConsultation, {headers});
    
  }

  redirectToConsultationList(): void {
    this.router.navigate(['/listeConsultation']);
  }
  
  

  modifierConsultation(id: number, consultation: Consultation): Observable<Consultation> {
    
    const formattedDate = this.datePipe.transform(consultation.date, 'yyyy-MM-dd');
    
    const headers = this.connexionService.getHeadersWithAuthorization();

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
      {headers}
    );

  }

  getConsultationById(consultationId: number): Observable<Consultation> {

    const headers = this.connexionService.getHeadersWithAuthorization();

    return this.httpClient.get<Consultation>(`${this.apiUrl}/consultations/${consultationId}`, {headers});
  }

  supprimerConsultation(id: number): Observable<void> {
    
    const headers = this.connexionService.getHeadersWithAuthorization();
    return this.httpClient.delete<void>(`${this.apiUrl}/consultations/${id}`, {headers})
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Erreur lors de la suppression : ', error);
          return throwError('Erreur lors de la suppression.');
        })
      );
  }
}
