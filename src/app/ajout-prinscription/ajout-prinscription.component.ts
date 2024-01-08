import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medecin } from 'src/models/medecin';
import { Patient } from 'src/models/patient';
import { Prescription } from 'src/models/prescription';
import { MedecinService } from 'src/services/medecin-service.service';
import { PatientService } from 'src/services/patient-service.service';
import { PrescriptionService } from 'src/services/prescription.service';


@Component({
  selector: 'app-ajout-prinscription',
  templateUrl: './ajout-prinscription.component.html',
  styleUrls: ['./ajout-prinscription.component.scss']
})
export class AjoutPrinscriptionComponent implements OnInit{

  nouvellePrescription: Prescription = {
    id: 0,
    medecin: {} as Medecin,
    patient: {} as Patient,
    description: '',
    date: new Date(),
    medicament: '',
    idPatient: 0
  };

  prescriptions: Prescription[] = [];
  errorMessage = '';
  successMessage = '';

  patients: Patient[] = [];
  medecins: Medecin[] = [];

  constructor(
    private prescriptionService: PrescriptionService,
    private patientService: PatientService,
    private medecinService: MedecinService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

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

  ajouterPrescription(): void {
    this.prescriptionService.ajouterPrescription(this.nouvellePrescription).subscribe(
      (nouvellePrescription: Prescription) => {
        console.log('Prescription ajoutée avec succès :', nouvellePrescription);
        this.refreshPrescriptions();
        this.gotoList('Prescription ajoutée avec succès');
      },
      (err: any) => {
        console.error('Erreur lors de l\'ajout de la prescription :', err);
        this.errorMessage = 'Erreur lors de l\'ajout de la prescription';
        this.gotoList('');
      }
    );
  }


  refreshPrescriptions(): void {
    this.prescriptionService.getListPrescriptions().subscribe(
      (prescriptions: Prescription[]) => {
        this.prescriptions = prescriptions;
        this.successMessage = 'Requête valide';
      },
      (err: any) => {
        this.errorMessage = 'Erreur de requête';
      }
    );
  }

  gotoList(successMessage: string): void {
    this.router.navigate(['/listePrescription'], { queryParams: { successMessage } });
  }


  
}
