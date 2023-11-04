import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/models/utilisateur';
import { PatientService } from 'src/services/patient-service.service';

@Component({
  selector: 'app-liste-patient',
  templateUrl: './liste-patient.component.html',
  styleUrls: ['./liste-patient.component.scss']
})
export class ListePatientComponent implements OnInit {
  patients: Utilisateur[] = []; // Utilisateur au lieu de Patient

  constructor(private patientService: PatientService) {}

  ngOnInit(): void {
    this.getPatients();
  }

  getPatients(): void {
    this.patientService.getPatients().subscribe(
      (patients: Utilisateur[]) => {
        this.patients = patients;
      },
      (error: any) => {
        // Gérer l'erreur, afficher un message par exemple
        console.error('Erreur lors de la récupération des patients :', error);
      }
    );
  }
}
