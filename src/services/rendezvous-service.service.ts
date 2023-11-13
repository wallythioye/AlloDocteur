import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  getRendezvous(): Observable<RendezVous[]> {
    return this.__httpClient.get<RendezVous[]>(this.apiUrl+"/rendezVouss");
  }

  ajouterRendezvous(nouveauRendezvous: RendezVous): Observable<RendezVous> {
    return this.__httpClient.post<RendezVous>(this.apiUrl+'/rendezVouss', nouveauRendezvous);
  }

  modifierRendezVous(rendezvousModifie: RendezVous): Observable<RendezVous> {
    return this.__httpClient.put<RendezVous>(`${this.apiUrl}/${rendezvousModifie.id}`,rendezvousModifie);
  }
}
