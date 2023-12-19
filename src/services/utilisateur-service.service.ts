// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { Utilisateur } from 'src/models/utilisateur';
// import { ServeurService } from './serveur.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class UtilisateurServiceService {

//   private apiUrl = '';

//   constructor(private __httpClient: HttpClient, private serveurService: ServeurService) {
//        this.apiUrl = serveurService.getFullUrl();
//   }

//   getUtilisateurs(): Observable<Utilisateur[]> {
//     return this.__httpClient.get<Utilisateur[]>(`${this.apiUrl}/utilisateurs`);
//   }
// }
