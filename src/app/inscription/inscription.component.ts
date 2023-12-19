import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/models/patient';
import { PatientService } from 'src/services/patient-service.service';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent {
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
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private patientService: PatientService, private router: Router) {}

  inscrirePatient(): void {
    this.patientService.inscription(this.utilisateur).subscribe(
      {
        next: (nouveauPatient) => {
          this.successMessage = 'Inscription réussie pour '+nouveauPatient;
          this.gotoConnexion();
        },
        error: (err) => {
          this.errorMessage = 'Erreur lors de l\'inscription du patient.';
        }
      }
    );
  }

  gotoConnexion() {
    this.router.navigate(['/connexion']);
  }
}
