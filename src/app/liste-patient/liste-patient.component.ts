import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/models/patient';
import { Utilisateur } from 'src/models/utilisateur';
import { AdminServiceService } from 'src/services/admin-service.service';
import { PatientService } from 'src/services/patient-service.service';

@Component({
  selector: 'app-liste-patient',
  templateUrl: './liste-patient.component.html',
  styleUrls: ['./liste-patient.component.scss'],
  
})
export class ListePatientComponent implements OnInit {
  patients: Patient[] = [];

  errorMessage = '';
  successMessage = '';

  constructor(private patientService: PatientService, private adminService: AdminServiceService) {}

  ngOnInit(): void {
    this.getPatients();
  }

  getPatients(): void {
    this.patientService.getPatients().subscribe(
      (patients: Patient[]) => {
        this.patients = patients;
      },
      (error: any) => {
        console.error('Erreur lors de la récupération des patients :', error);
      }
    );
  }

  refreshPatient(): void {
    this.patientService.getPatients().subscribe(
      {
        next: (patient: Patient[]) => {
          this.patients= patient;
        },
        error: (err: any) => {
          this.errorMessage = "Erreur de requête";
        },
        complete: () => {
          this.successMessage = "Requête valide";
        }
      }
    );
  }

  bloquerUtilisateur(utilisateurId: number): void {
    this.adminService.bloquerUtilisateur(utilisateurId).subscribe(
      () => {
        console.log('Utilisateur bloqué avec succès.');
        this.refreshPatient();
      },
      (error) => {
        console.error('Erreur lors du blocage de l\'utilisateur', error);
      }
    );
  }
  
  debloquerUtilisateur(utilisateurId: number): void {
    this.adminService.debloquerUtilisateur(utilisateurId).subscribe(
      () => {
        console.log('Utilisateur débloqué avec succès.');
        this.refreshPatient();
      },
      (error) => {
        console.error('Erreur lors du déblocage de l\'utilisateur', error);
      }
    );
  }
  
}
