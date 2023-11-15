import { Component, OnInit } from '@angular/core';
import { Medecin } from 'src/models/medecin';
import { Patient } from 'src/models/patient';
import { RendezVous } from 'src/models/rendezvous';
import { Utilisateur } from 'src/models/utilisateur';
import { MedecinService } from 'src/services/medecin-service.service';
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
    dateCreation: new  Date(),
    motif: '',
    medecin: {} as Medecin,
    statut: ''
  };

  rendezvous: RendezVous[] = [];
  errorMessage = '';
  successMessage ='';

  patients: Utilisateur[] = [];
  medecins: Utilisateur[] = [];

  constructor(
    private rendezvousService: RendezvousServiceService,
    private patientService: PatientService,
    private medecinService: MedecinService
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

