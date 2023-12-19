import { DatePipe } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Prescription } from 'src/models/prescription';
import { ConnexionService } from './connexion.service';
import { ServeurService } from './serveur.service';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {
  private apiUrl = '';

  constructor(private httpClient: HttpClient, private datePipe: DatePipe , private serveurService: ServeurService, private connexionService: ConnexionService) {
      this.apiUrl = serveurService.getFullUrl();
  }

    getListPrescriptions(): Observable<Prescription[]> {
      
      const headers = this.connexionService.getHeadersWithAuthorization();
      return this.httpClient.get<Prescription[]>(this.apiUrl+"/prescriptions", { headers });

  }

  ajouterPrescription(prescription: Prescription): Observable<Prescription> {
    
    const headers = this.connexionService.getHeadersWithAuthorization();

    return this.httpClient.post<Prescription>(this.apiUrl+'/prescriptions', prescription, { headers });
  
}

    modifierPrescription(id: number, prescription: Prescription): Observable<Prescription> {
      // Formatez la date au format "yyyy-MM-dd"
      const formattedDate = this.datePipe.transform(prescription.date, 'yyyy-MM-dd');

      const headers = this.connexionService.getHeadersWithAuthorization();

      // Utilisez la date formatée lors de la requête
      return this.httpClient.put<Prescription>(`${this.apiUrl}/prescriptions/${id}`,
        {
          medicament: prescription.medicament,
          description: prescription.description,
          date: formattedDate,
        },
        { headers }
      );
    
}
  
  getPrescriptionById(prescriptionId: number): Observable<Prescription>{

    const headers = this.connexionService.getHeadersWithAuthorization();
    return this.httpClient.get<Prescription>(`${this.apiUrl}/prescriptions/${prescriptionId}`, { headers });
  }
  

  supprimerPrescription(id: number): Observable<void> {
    // Récupérez le token JWT depuis le localStorage
    const headers = this.connexionService.getHeadersWithAuthorization();
      // Utilisez la méthode HTTP DELETE avec les options définies
      return this.httpClient.delete<void>(`${this.apiUrl}/prescriptions/${id}`,  { headers })
        .pipe(
          catchError((error: HttpErrorResponse) => {
            console.error('Erreur lors de la suppression : ', error);
            // Ajoutez ici la gestion des erreurs, par exemple, renvoyer un Observable avec un message d'erreur.
            return throwError('Erreur lors de la suppression.');
          })
        );
    } 
}
