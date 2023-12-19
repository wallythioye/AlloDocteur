import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Token } from 'src/models/token';
import { ServeurService } from './serveur.service';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {
  private apiUrl = '';

  constructor(private http: HttpClient, private serveurService: ServeurService) {
    this.apiUrl = serveurService.getLoginUrl();
   }

   getHeadersWithAuthorization(): HttpHeaders {
    const token = localStorage.getItem('token');

    if (token) {
      return new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      });
    }

    console.error('Token is null. User is not authenticated.');
    return new HttpHeaders();
  }

   login( userEmail: string,  userPassword: string ): Observable<Token> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    //var data = {"email":"\""+email+"\"", "password":"\""+password+"\""};
    var data = {"email":userEmail, "password":userPassword};
    return this.http.post<Token>(`${this.apiUrl}/auth/login`, data, { headers });
  }

  logout(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = this.getHeadersWithAuthorization();

    if (token) {
      return this.http.get<any>(`${this.apiUrl}/auth/logout/${token}`, { headers });
    } else {
      console.error('Token is null. User is not authenticated.');
     
      return new Observable();
    }
  }
}
