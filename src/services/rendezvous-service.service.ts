import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { RendezVous } from 'src/models/rendezvous';
import { ServeurService } from './serveur.service';

@Injectable({
  providedIn: 'root'
})
export class RendezvousServiceService {
  private apiUrl = '';

  constructor(private __httpClient: HttpClient, private serveurService: ServeurService) {
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

  modifierRendezVous(rendezvousModifie: RendezVous): Observable<RendezVous> {
    return this.__httpClient.put<RendezVous>(`${this.apiUrl}/rendezvous/${rendezvousModifie.id}`, rendezvousModifie);
  }
}
