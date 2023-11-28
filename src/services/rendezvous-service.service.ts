import { DatePipe } from '@angular/common';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { RendezVous } from 'src/models/rendezvous';
import { ServeurService } from './serveur.service';

@Injectable({
  providedIn: 'root'
})
export class RendezvousServiceService {
  private apiUrl = '';

  constructor(private __httpClient: HttpClient,private datePipe: DatePipe, private serveurService: ServeurService) {
    this.apiUrl = serveurService.getFullUrl();
  }

  getListeRendezvous(): Observable<RendezVous[]> {
    return this.__httpClient.get<RendezVous[]>(this.apiUrl + '/rendezvous');
  }

  ajouterRendezvous(nouveauRendezvous: RendezVous): Observable<RendezVous> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      params: new HttpParams()
    };
    return this.__httpClient.post<RendezVous>(this.apiUrl + '/rendezvous', nouveauRendezvous, httpOptions)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Erreur ajout du rendezvous:', error);
          throw error;
        })
      );
  }


  modifierRendezVous(id: number, rendezvous: RendezVous): Observable<RendezVous> {

    const formattedDate = this.datePipe.transform(rendezvous.date, 'yyyy-MM-dd');
    const httpOptions = {
           headers: new HttpHeaders({ 'Content-Type': 'application/json' })
       };
    return this.__httpClient.put<RendezVous>(
      `${this.apiUrl}/rendezvous/${id}`,
      {
        date: formattedDate,
        motif: rendezvous.motif,
      },
        httpOptions
      );
  }

  getRendezvousById(rendezVousId : number):  Observable<RendezVous> {
    return this.__httpClient.get<RendezVous>(`${this.apiUrl}/rendezvous/${rendezVousId}`);
  }

  supprimerRendezvous(id: number): Observable<void> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      responseType: 'text' as 'json'  // Indique que la réponse attendue n'est pas du JSON mais une simple réponse textuelle.
    };
    return this.__httpClient.delete<void>(`${this.apiUrl}/rendezvous/${id}`, httpOptions)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Erreur lors de la suppression : ', error);
        return throwError('Erreur lors de la suppression.');
      })
    );
  }

}
