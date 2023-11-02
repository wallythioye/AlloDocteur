import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RendezVous } from 'src/models/rendezvous';
import { ServeurService } from './serveur.service';

@Injectable({
  providedIn: 'root'
})
export class RendezvousServiceService {
  private apiUrl = 'http://localhost:8080/api/rendezvous';

  constructor(private __httpClient: HttpClient, private serveurService: ServeurService) {
      this.apiUrl = serveurService.getFullUrl();
  }

  getRendezvous(): Observable<RendezVous[]> {
    return this.__httpClient.get<RendezVous[]>(this.apiUrl+"/rendezVouss");
  }

  ajouterRendezvous(nouveauRendezvous: RendezVous): Observable<RendezVous> {
    return this.__httpClient.post<RendezVous>(this.apiUrl, nouveauRendezvous);
  }

  modifierRendezVous(rendezvousModifie: RendezVous): Observable<RendezVous> {
    return this.__httpClient.put<RendezVous>(`${this.apiUrl}/${rendezvousModifie.id}`,rendezvousModifie);
  }
}
