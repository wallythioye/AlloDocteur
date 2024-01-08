import { DatePipe } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { RendezVous } from 'src/models/rendezvous';
import { ConnexionService } from './connexion.service';
import { ServeurService } from './serveur.service';

@Injectable({
  providedIn: 'root'
})
export class RendezvousServiceService {
  private apiUrl = '';

  constructor(private __httpClient: HttpClient,
    private datePipe: DatePipe,
     private serveurService: ServeurService,
     private connexionService: ConnexionService) {
      
    this.apiUrl = serveurService.getFullUrl();
  }

getListeRendezvous(): Observable<RendezVous[]> {
  
  const headers = this.connexionService.getHeadersWithAuthorization();

    return this.__httpClient.get<RendezVous[]>(`${this.apiUrl}/rendezvous`, { headers });

}

  ajouterRendezvous(nouveauRendezvous: RendezVous): Observable<RendezVous> {
    
    const headers = this.connexionService.getHeadersWithAuthorization();

    return this.__httpClient.post<RendezVous>(this.apiUrl + '/rendezvous', nouveauRendezvous, { headers });
  
}


  modifierRendezVous(id: number, rendezvous: RendezVous): Observable<RendezVous> {

    const formattedDate = this.datePipe.transform(rendezvous.date, 'yyyy-MM-dd');
    
    const headers = this.connexionService.getHeadersWithAuthorization();

    return this.__httpClient.put<RendezVous>(
      `${this.apiUrl}/rendezvous/${id}`,
      {
        date: formattedDate,
        motif: rendezvous.motif,
      },
        { headers }
      );
  }

  getRendezvousById(rendezVousId : number):  Observable<RendezVous> {
    const headers = this.connexionService.getHeadersWithAuthorization();

    return this.__httpClient.get<RendezVous>(`${this.apiUrl}/rendezvous/${rendezVousId}`, { headers });
  }

  supprimerRendezvous(id: number): Observable<void> {
    
    const headers = this.connexionService.getHeadersWithAuthorization();

    return this.__httpClient.delete<void>(`${this.apiUrl}/rendezvous/${id}`, { headers })
    .pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Erreur lors de la suppression : ', error);
        return throwError('Erreur lors de la suppression.');
      })
    );
  }

  confirmerRendezvous(id: number): Observable<void> {
    const headers = this.connexionService.getHeadersWithAuthorization();

    return this.__httpClient.post<void>(`${this.apiUrl}/rendezvous/confirmer/${id}`, null, { headers })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Erreur lors de la confirmation : ', error);
          return throwError('Erreur lors de la confirmation.');
        })
      );
  }

  
  // Nouvelle méthode pour annuler un rendez-vous
  annulerRendezvous(id: number): Observable<void> {
    const headers = this.connexionService.getHeadersWithAuthorization();
    return this.__httpClient.post<void>(`${this.apiUrl}/rendezvous/annuler/${id}`, null, { headers })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Erreur lors de l\'annulation : ', error);
          return throwError('Erreur lors de l\'annulation.');
        })
      );
  }


  prendreRendezvous(rendezvous: RendezVous): Observable<RendezVous> {

    const headers = this.connexionService.getHeadersWithAuthorization();
    
    return this.__httpClient.post<RendezVous>(this.apiUrl + '/rendezvous/prendreRv',  rendezvous , { headers });
}

}

