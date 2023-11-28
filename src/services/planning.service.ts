import { DatePipe } from '@angular/common';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Planning } from 'src/models/planning';
import { ServeurService } from './serveur.service';

@Injectable({
  providedIn: 'root'
})
export class PlanningService {
  private apiUrl = "";


  constructor(private httpClient: HttpClient, private datePipe: DatePipe,private serveurService: ServeurService) {
      this.apiUrl=serveurService.getFullUrl();
   }

  getPlanning(): Observable<Planning[]> {
    return this.httpClient.get<Planning[]>(this.apiUrl+'/plannings');
  }

  ajoutPlanning(nouveauPlanning: Planning): Observable<Planning> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.httpClient.post<Planning>(this.apiUrl+'/plannings', nouveauPlanning, httpOptions);
  }

  modifierPlanning(id: number, planning: Planning): Observable<Planning> {
    const formattedDate = this.datePipe.transform(planning.date, 'yyyy-MM-dd');
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.httpClient.put<Planning>(
      `${this.apiUrl}/plannings/${id}`,
      {
        date: formattedDate,
      },
      httpOptions
    );
  }

  getPlanningById(planningId: number): Observable<Planning> {
    return this.httpClient.get<Planning>(`${this.apiUrl}/plannings/${planningId}`)
  }

  supprimerPlanning(id: number): Observable<void> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      responseType: 'text' as 'json'  // Indique que la réponse attendue n'est pas du JSON mais une simple réponse textuelle.
    };

    return this.httpClient.delete<void>(`${this.apiUrl}/plannings/${id}`, httpOptions)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Erreur lors de la suppression : ', error);
        return throwError('Erreur lors de la suppression.');
      })
    );
  }
}
