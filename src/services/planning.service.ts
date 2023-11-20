import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Planning } from 'src/models/planning';
import { ServeurService } from './serveur.service';

@Injectable({
  providedIn: 'root'
})
export class PlanningService {
  private apiUrl = "";


  constructor(private httpClient: HttpClient,private serveurService: ServeurService) {
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

  modifierPlanning(nouveauPlanning: Planning): Observable<Planning> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.httpClient.put<Planning>(`${this.apiUrl}/${nouveauPlanning.id}`, nouveauPlanning, httpOptions);
  }
}
