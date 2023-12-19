import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Prescription } from 'src/models/prescription';
import { PrescriptionService } from 'src/services/prescription.service';

@Component({
  selector: 'app-liste-prescription-patient',
  templateUrl: './liste-prescription-patient.component.html',
  styleUrl: './liste-prescription-patient.component.scss'
})
export class ListePrescriptionPatientComponent implements OnInit{

  listePrescription: Prescription[] = [];

  errorMessage = '';
  successMessage = '';

  constructor(private prescriptionService: PrescriptionService,
    private router: Router) {}

  ngOnInit(): void {
    this.getListePrescriptions();
  }

  getListePrescriptions(): void {
    this.prescriptionService.getListPrescriptions().subscribe(
      (prescriptions) => {
        this.listePrescription = prescriptions;
      },
      (error) => {
        console.error('Erreur lors du chargement de la liste des prescriptions', error);
      }
    );
  }

  refreshPrescriptions(): void {
    this.prescriptionService.getListPrescriptions().subscribe(
      {
        next: (prescriptions: Prescription[]) => {
          this.listePrescription = prescriptions;
        },
        error: (err: any) => {
          this.errorMessage = 'Erreur de requête';
        },
        complete: () => {
          this.successMessage = 'Requête valide';
        }
      }
    );
  }

}
