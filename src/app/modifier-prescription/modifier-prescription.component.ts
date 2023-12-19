import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medecin } from 'src/models/medecin';
import { Patient } from 'src/models/patient';
import { Prescription } from 'src/models/prescription';
import { PrescriptionService } from 'src/services/prescription.service';

@Component({
  selector: 'modifier-prescription',
  templateUrl: './modifier-prescription.component.html',
  styleUrls: ['./modifier-prescription.component.scss'],
})
export class ModifierPrescriptionComponent implements OnInit {

  id!: number;
  prescription: Prescription = { 
    id: 0, 
    medicament: '', 
    description: '',
    date: new Date() ,
    medecin: {} as Medecin,
    patient: {} as Patient,
    idPatient: 0
  };

  listePrescriptions: Prescription[] = [];

  errorMessage = '';
  successMessage = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private prescriptionService: PrescriptionService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getListePrescriptions();
  }

  refreshPrescriptions(): void {
    this.prescriptionService.getListPrescriptions().subscribe(
      {
        next: (prescriptions: Prescription[]) => {
          this.listePrescriptions = prescriptions;
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

  getListePrescriptions(): void {
    this.prescriptionService.getListPrescriptions().subscribe(
      (prescriptions) => {
        this.listePrescriptions = prescriptions;
        // Assurez-vous que la prescription actuelle est correctement initialisée
        this.prescription =
         this.listePrescriptions.find((p) => p.id === this.id) || {
          id: 0, 
          medicament: '',
          description: '',
          date: new Date() ,
          medecin: {} as Medecin,
          patient: {} as Patient,
          idPatient: 0
        };
      },
      (error) => {
        console.error('Erreur lors du chargement de la liste des prescriptions', error);
      }
    );
  }

  updatePrescription() {
    this.prescriptionService.modifierPrescription(this.id, this.prescription)
      .subscribe((data: Prescription) => {
        console.log(data);
        // Mettez à jour la prescription si nécessaire
        this.gotoList();
      }, (error: any) => console.log(error));
  }

  onSubmit() {
    this.updatePrescription();
  }

  gotoList() {
    this.router.navigate(['/listePrescription']);
  }
}
