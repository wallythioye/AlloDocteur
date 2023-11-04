import { Component } from '@angular/core';
import { Utilisateur } from 'src/models/utilisateur';
import { PatientService } from 'src/services/patient-service.service';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent {
  utilisateur: Utilisateur = {
    id: 0,
    prenom: '',
    nom: '',
    sexe: '',
    age: 0,
    adresse: '',
    telephone: '',
    email: '',
    password: '',
    profil: '',
    statut: 0
  };
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private patientService: PatientService) {}

  inscrirePatient(): void {
    this.patientService.ajouterPatient(this.utilisateur).subscribe(
      {
        next: (nouveauPatient) => {
          this.successMessage = 'Inscription réussie pour ';
          // Redirection ou autre traitement après l'inscription réussie
        },
        error: (err) => {
          this.errorMessage = 'Erreur lors de l\'inscription du patient.';
        }
      }
    );
  }
}
