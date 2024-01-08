import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Patient } from 'src/models/patient';
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

  constructor(private patientService: PatientService, private adminService: AdminServiceService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getPatients();
    this.route.queryParams.subscribe(params => {
      this.successMessage = params['successMessage'];
      this.errorMessage = params['errorMessage'];
    });
  }

  getPatients(): void {
    this.patientService.getPatients().subscribe(
      (patients: Patient[]) => {
        this.patients = patients;
      },
      (error: any) => {
        console.error('Erreur lors de la récupération des patients :', error);
        this.errorMessage = 'Erreur lors de la récupération des patients.';
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
        console.log('Patient bloqué avec succès.');
        this.successMessage = 'Patient bloqué avec succès.';
        this.refreshPatient();
      },
      (error) => {
        console.error('Erreur lors du blocage du patient', error);
        // this.errorMessage = 'Erreur lors du blocage du patient.';
      }
    );
  }

  confirmBloquer(utilisateurId: number): void {
    const result = confirm('Êtes-vous sûr de vouloir bloquer ce patient ?');
    if (result) {
      this.bloquerUtilisateur(utilisateurId);
    }
  }
  
  debloquerUtilisateur(utilisateurId: number): void {
    this.adminService.debloquerUtilisateur(utilisateurId).subscribe(
      () => {
        console.log('Patient débloqué avec succès.');
        this.successMessage = 'Patient débloqué avec succès.';
        this.refreshPatient();
      },
      (error) => {
        console.error('Erreur lors du déblocage du patient', error);
        // this.errorMessage = 'Erreur lors du déblocage du patient';
      }
    );
  }

  confirmDebloquer(utilisateurId: number): void {
    const result = confirm('Voulez vous débloquer ce patient ?');
    if (result) {
      this.debloquerUtilisateur(utilisateurId);
    }
  }
  
}
