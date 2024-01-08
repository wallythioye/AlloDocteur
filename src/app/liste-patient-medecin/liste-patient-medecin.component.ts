import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Patient } from 'src/models/patient';
import { PatientService } from 'src/services/patient-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-liste-patient-medecin',
  templateUrl: './liste-patient-medecin.component.html',
  styleUrl: './liste-patient-medecin.component.scss'
})
export class ListePatientMedecinComponent implements OnInit {
  
  patients: Patient[] = [];

  errorMessage = '';
  successMessage = '';

  constructor(private patientService: PatientService, private route: ActivatedRoute) {}

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
        this.errorMessage = 'Erreur lors de la récupération des patients.'
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
}
