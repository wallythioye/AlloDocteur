import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private router: Router,
    private route: ActivatedRoute ) {}

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
        this.errorMessage = 'Erreur lors du chargement de la liste des prescriptions.'
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
        this.successMessage = 'Suppression réussie.';
        this.refreshPrescriptions();
      },
      error => {
        console.error('Erreur lors de la suppression de la prescription: ', error);
        this.errorMessage = 'Erreur lors de la suppression de la prescription.'
      }
    );
  }
  confirmDelete(id: number): void {
    const result = confirm('Êtes-vous sûr de vouloir supprimer cette prescription ?');
    if (result) {
      this.deletePrescription(id);
      this.refreshPrescriptions();
    }
  }

  confirmEdit(id: number): void {
    const result = confirm('Voulez vous modifier ce prescription ?');
    if (result) {
      this.editPrescription(id);
    }
  }

  editPrescription(prescriptionId: number): void {
    this.router.navigate(['/modifierPrescription', prescriptionId]);
  }

  
}