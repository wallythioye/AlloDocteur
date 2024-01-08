import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
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
    private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getListePrescriptions();
    this.route.queryParams.subscribe(params => {
      this.successMessage = params['successMessage'];
      this.errorMessage = params['errorMessage'];
    });
  }

  getListePrescriptions(): void {
    this.prescriptionService.getListPrescriptions().subscribe(
      (prescriptions) => {
        this.listePrescription = prescriptions;
      },
      (error) => {
        console.error('Erreur lors du chargement de la liste des prescriptions', error);
        this.errorMessage = 'Erreur lors du chargement de la liste des prescriptions.';
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
