import { Component, OnInit } from '@angular/core';
import { Medecin } from 'src/models/medecin';
import { Patient } from 'src/models/patient';
import { RendezVous } from 'src/models/rendezvous';
import { Utilisateur } from 'src/models/utilisateur';
import { PatientService } from 'src/services/patient-service.service';
import { RendezvousServiceService } from 'src/services/rendezvous-service.service';

@Component({
  selector: 'app-ajout-rendezvous-medecin',
  templateUrl: './ajout-rendezvous-medecin.component.html',
  styleUrls: ['./ajout-rendezvous-medecin.component.scss']
})
export class AjoutRendezvousMedecinComponent implements OnInit {
  nouveauRendezvous: RendezVous = {
    id: 0,
    patient: {} as Patient,
    date: new Date(),
    motif: '',
    medecin: {} as Medecin,
    statut: ''
  };

  rendezvous: RendezVous[] = [];
  errorMessage = '';
  successMessage ='';

  patients: Utilisateur[] = [];

  constructor(
    private rendezvousService: RendezvousServiceService,
    private patientService: PatientService
  ) {}



  ngOnInit(): void {
    this.getPatients();
  }

  getPatients(): void {
    this.patientService.getPatients().subscribe(
      patients => {
        console.log(patients);
        this.patients = patients;
      },
      (error: any) => {
        // Gérer l'erreur, afficher un message par exemple
        console.error('Erreur lors de la récupération des patients :', error);
      }
    );
    }
  ajouterRendezvous(): void {
    this.rendezvousService.ajouterRendezvous(this.nouveauRendezvous).subscribe(
      (nouveauRendezvous: RendezVous) => {
        this.refreshRendezvous();
        console.log('Rendez-vous ajouté avec succès :', nouveauRendezvous);
      },
      (err: any) => {
        console.error('Erreur lors de l\'ajout du rendez-vous :', err);
      }
    );
  }

  refreshRendezvous(): void {
    this.rendezvousService.getRendezvous().subscribe(
      (rendezvous: RendezVous[]) => {
        this.rendezvous = rendezvous;
        this.successMessage = 'Requête valide';
      },
      (err: any) => {
        this.errorMessage = 'Erreur de requête';
      }
    );
  }
}

