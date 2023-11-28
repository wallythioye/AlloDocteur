import { DatePipe } from '@angular/common';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Prescription } from 'src/models/prescription';
import { ServeurService } from './serveur.service';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {
  private apiUrl = '';

  constructor(private httpClient: HttpClient, private datePipe: DatePipe , private serveurService: ServeurService) {
      this.apiUrl = serveurService.getFullUrl();
  }

  getListPrescriptions(): Observable<Prescription[]> {
    return this.httpClient.get<Prescription[]>(this.apiUrl+"/prescriptions");
  }

  ajouterPrescription(prescription: Prescription): Observable<Prescription> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.httpClient.post<Prescription>(this.apiUrl+'/prescriptions', prescription, httpOptions);
  }

  modifierPrescription(id: number, prescription: Prescription): Observable<Prescription> {
    // Formatez la date au format "yyyy-MM-dd"
    const formattedDate = this.datePipe.transform(prescription.date, 'yyyy-MM-dd');

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };


    // Utilisez la date formatée lors de la requête
    return this.httpClient.put<Prescription>(
      `${this.apiUrl}/prescriptions/${id}`,
      {
        medicament: prescription.medicament,
        description: prescription.description,
        date: formattedDate,
      },
      httpOptions
    );
  }
  
  getPrescriptionById(prescriptionId: number): Observable<Prescription>{
    return this.httpClient.get<Prescription>(`${this.apiUrl}/prescriptions/${prescriptionId}`);
  }
  

  supprimerPrescription(id: number): Observable<void> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      responseType: 'text' as 'json'  // Indique que la réponse attendue n'est pas du JSON mais une simple réponse textuelle.
    };
    return this.httpClient.delete<void>(`${this.apiUrl}/prescriptions/${id}`, httpOptions)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Erreur lors de la suppression : ', error);
          // Ajoutez ici la gestion des erreurs, par exemple, renvoyer un Observable avec un message d'erreur.
          return throwError('Erreur lors de la suppression.');
        })
      );
  }
}
