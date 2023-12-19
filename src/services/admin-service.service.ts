import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServeurService } from './serveur.service';

@Injectable({
  providedIn: 'root',
})
export class AdminServiceService {

  private apiUrl = '';

  constructor(
    private http: HttpClient,
    private serveurService: ServeurService
  ) {
    this.apiUrl = serveurService.getFullUrl();
  }

  bloquerUtilisateur(utilisateurId: number): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<any>(`${this.apiUrl}/admin/verrouiller/${utilisateurId}`, {}, { headers });
  }

  debloquerUtilisateur(utilisateurId: number): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<any>(`${this.apiUrl}/admin/deverrouiller/${utilisateurId}`, {}, { headers });
  }
}
