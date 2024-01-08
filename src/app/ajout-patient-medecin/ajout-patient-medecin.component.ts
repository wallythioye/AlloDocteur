import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/models/patient';
import { PatientService } from 'src/services/patient-service.service';

@Component({
  selector: 'app-ajout-patient-medecin',
  templateUrl: './ajout-patient-medecin.component.html',
  styleUrl: './ajout-patient-medecin.component.scss'
})
export class AjoutPatientMedecinComponent {
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

  ajoutPatient(): void {
    this.patientService.ajouterPatient(this.utilisateur).subscribe(
      {
        next: (nouveauPatient) => {
          this.successMessage = 'Ajout patient reussit pour '+nouveauPatient;
          this.refreshPatients();
          this.gotoList('Ajout du patient reussit');
          
        },
        error: (err) => {
          this.errorMessage = 'Erreur lors de l\'ajout du patient.';
        }
      }
    );
  }

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

  gotoList(successMessage: string): void {
    this.router.navigate(['/listePatient'], { queryParams:  { successMessage  } });
  }
}
