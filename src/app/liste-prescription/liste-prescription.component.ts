import { Component, OnInit } from '@angular/core';
import { Prescription } from 'src/models/prescription';
import { PrescriptionService } from 'src/services/prescription.service';


@Component({
  selector: 'app-liste-prescription',
  templateUrl: './liste-prescription.component.html',
  styleUrls: ['./liste-prescription.component.scss']
})
export class ListePrescriptionComponent implements OnInit {

  listePrescription: Prescription[] = [];

  constructor(private prescriptionService: PrescriptionService) {}

  ngOnInit(): void {
    this.getListePrescriptions();
  }

  getListePrescriptions(): void {
    this.prescriptionService.getListePrescription().subscribe(
      (prescriptions) => {
        this.listePrescription = prescriptions;
      },
      (error) => {
        console.error('Erreur lors du chargement de la liste des prescriptions', error);
      }
    );
  }
}
