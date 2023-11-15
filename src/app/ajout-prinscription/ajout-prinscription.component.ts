import { Component } from '@angular/core';
import { Medecin } from 'src/models/medecin';
import { Patient } from 'src/models/patient';
import { Prescription } from 'src/models/prescription';
import { Utilisateur } from 'src/models/utilisateur';
import { MedecinService } from 'src/services/medecin-service.service';
import { PatientService } from 'src/services/patient-service.service';
import { PrescriptionService } from 'src/services/prescription.service';


@Component({
  selector: 'app-ajout-prinscription',
  templateUrl: './ajout-prinscription.component.html',
  styleUrls: ['./ajout-prinscription.component.scss']
})
export class AjoutPrinscriptionComponent {
 

  nouvellePrescription: Prescription = {
    id:0,
    medecin: {} as Medecin,
    patient: {} as Patient,
    description: '',
    date: new Date(),
    medicament: []
  };

  prescriptions: Prescription[] = [];
  errorMessage = '';
  successMessage = '';

  patients: Utilisateur[] = [];
  medecins: Utilisateur[] = [];

  constructor(private prescriptionService: PrescriptionService,
    private patientService: PatientService,
    private medecinService: MedecinService) {}

    ngOnInit(): void {
      this.getPatients();
      this.getMedecins();
    }
  
    getPatients(): void {
      this.patientService.getPatients().subscribe(
        patients => {
          console.log(patients);
          this.patients = patients;
        },
        (error: any) => {
          console.error('Erreur lors de la récupération des patients :', error);
        }
      );
      }
      getMedecins(): void {
        this.medecinService.getMedecins().subscribe(
          (medecins: Medecin[]) => {
            this.medecins = medecins;
          },
          (error: any) => {
            console.error('Erreur lors de la récupération des médecins :', error);
          }
        );
      }
  
  refreshPrescriptions(): void {
    this.prescriptionService.getPrescription().subscribe(
      {
        next: (prescriptions: Prescription[]) => {
          this.prescriptions = prescriptions;
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

  ajouterPrescription(): void {
    this.prescriptionService.ajouterPrescription(this.nouvellePrescription).subscribe(
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
