import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/models/patient';
import { PatientService } from 'src/services/patient-service.service';

@Component({
  selector: 'app-ajout-patient-admin',
  templateUrl: './ajout-patient-admin.component.html',
  styleUrl: './ajout-patient-admin.component.scss'
})
export class AjoutPatientAdminComponent {
  utilisateur: Patient = {
    id: 0,
    nom: '',
    prenom: '',
    sexe: '',
    age: 0,
    adresse: '',
    telephone: '',
    password: '',
    email: '',
    accountNonExpired: true,
    accountNonLocked: true,
    credentialsNonExpired: true,
    enabled: true,
    consultations: [],
    prescriptions: [],
    rappels: [],
    rendezVous: []
  };

  patients : Patient[] = [];
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private patientService: PatientService, private router: Router) {}

  refreshPatients(): void {
    this.patientService.getPatients().subscribe(
      (patients: Patient[]) => {
        this.patients = patients;
        this.successMessage = 'Requête valide';
      },
      (err: any) => {
        this.errorMessage = 'Erreur de requête';
      }
    );
  }


  ajoutPatient(): void {
    this.patientService.ajouterPatient(this.utilisateur).subscribe(
      {
        next: (nouveauPatient) => {
          console.log('Ajout patient reussit pour ' , nouveauPatient);
           this.refreshPatients();
          this.gotoList('Ajout du patient reussit ');
        },
        error: (err) => {
          this.errorMessage = 'Erreur lors de l\'ajout du patient.';
        }
      }
    );
  }

  gotoList(successMessage: string): void {
    this.router.navigate(['/listePatient'], { queryParams:  { successMessage  } } );
  }
  
}