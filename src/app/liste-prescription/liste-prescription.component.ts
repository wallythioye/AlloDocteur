import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prescription } from 'src/models/prescription';
import { PrescriptionService } from 'src/services/prescription.service';


@Component({
  selector: 'app-liste-prescription',
  templateUrl: './liste-prescription.component.html',
  styleUrls: ['./liste-prescription.component.scss']
})
export class ListePrescriptionComponent implements OnInit {

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

  deletePrescription(id: number) {
    this.prescriptionService.supprimerPrescription(id).subscribe(
      () => {
        console.log('Suppression réussie.');
        this.refreshPrescriptions();
      },
      error => {
        console.error('Erreur lors de la suppression de la prescription: ', error);
        
      }
    );
  }
  confirmDelete(id: number): void {
    const result = confirm('Êtes-vous sûr de vouloir supprimer cette prescription ?');
    if (result) {
      this.deletePrescription(id);
    }
  }

  editPrescription(prescriptionId: number): void {
    this.router.navigate(['/modifierPrescription', prescriptionId]);
  }
}