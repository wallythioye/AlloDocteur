import { Component } from '@angular/core';
import { Prescription } from 'src/models/prescription';
import { PrescriptionService } from 'src/services/prescription.service';


@Component({
  selector: 'app-ajout-prinscription',
  templateUrl: './ajout-prinscription.component.html',
  styleUrls: ['./ajout-prinscription.component.scss']
})
export class AjoutPrinscriptionComponent {
  prescriptions: Prescription[] = [];
  errorMessage = "";
  successMessage = "";

  constructor(private prescriptionService: PrescriptionService) {}

  refreshPrescriptions(): void {
    this.prescriptionService.getPrescription().subscribe(
      {
        next: (prescriptions: Prescription[]) => {
          this.prescriptions = prescriptions;
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

  ajouterPrescription(prescription: Prescription): void {
    this.prescriptionService.ajouterPrescription(prescription).subscribe(
      {
        next: (nouvellePrescription: any) => {
          this.refreshPrescriptions();
          console.log('Prescription ajoutée avec succès :', nouvellePrescription);
        },
        error: (err: any) => {
          console.error('Erreur lors de l\'ajout de la prescription :', err);
        }
      }
    );
  }

  modifierPrescription(prescription: Prescription): void {
    this.prescriptionService.modifierPrescription(prescription).subscribe(
      {
        next: (prescriptionModifie: any) => {
          this.refreshPrescriptions();
          console.log('Prescription modifiée avec succès :', prescriptionModifie);
        },
        error: (err: any) => {
          console.error('Erreur lors de la modification de la prescription :', err);
        }
      }
    );
  }
}
