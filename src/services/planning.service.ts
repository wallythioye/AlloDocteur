import { DatePipe } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Planning } from 'src/models/planning';
import { ConnexionService } from './connexion.service';
import { ServeurService } from './serveur.service';
@Injectable({
  providedIn: 'root'
})
export class PlanningService {
  private apiUrl = '';

  constructor(
    private httpClient: HttpClient,
    private datePipe: DatePipe,
    private serveurService: ServeurService,
    private connexionService: ConnexionService,
  ) {
    this.apiUrl = serveurService.getFullUrl();
  }

  getPlanning(): Observable<Planning[]> {
    const headers = this.connexionService.getHeadersWithAuthorization();

    return this.httpClient.get<Planning[]>(this.apiUrl + '/plannings', { headers });
  }
  
  getPlanningPatient(): Observable<Planning[]> {
    const headers = this.connexionService.getHeadersWithAuthorization();

    return this.httpClient.get<Planning[]>(this.apiUrl + '/plannings/planningPatient', { headers });
  }

  ajoutPlanning(nouveauPlanning: Planning): Observable<Planning> {
    const headers = this.connexionService.getHeadersWithAuthorization();

    return this.httpClient.post<Planning>(this.apiUrl + '/plannings', nouveauPlanning, { headers });
  }

  modifierPlanning(id: number, planning: Planning): Observable<Planning> {
    const formattedDate = this.datePipe.transform(planning.date, 'yyyy-MM-dd');
    const headers = this.connexionService.getHeadersWithAuthorization();

    return this.httpClient.put<Planning>(
      `${this.apiUrl}/plannings/${id}`,
      {
        date: formattedDate,
      },
      { headers }
    );
  }

  getPlanningById(planningId: number): Observable<Planning> {
    const headers = this.connexionService.getHeadersWithAuthorization();

    return this.httpClient.get<Planning>(`${this.apiUrl}/plannings/${planningId}`, { headers });
  }

  supprimerPlanning(id: number): Observable<void> {
    const headers = this.connexionService.getHeadersWithAuthorization();

    return this.httpClient.delete<void>(`${this.apiUrl}/plannings/${id}`, { headers })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Erreur lors de la suppression : ', error);
          return throwError('Erreur lors de la suppression.');
        })
      );
  }
}
