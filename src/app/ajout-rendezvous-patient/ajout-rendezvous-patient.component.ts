import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medecin } from 'src/models/medecin';
import { Patient } from 'src/models/patient';
import { RendezVous } from 'src/models/rendezvous';
import { Utilisateur } from 'src/models/utilisateur';
import { MedecinService } from 'src/services/medecin-service.service';
import { PatientService } from 'src/services/patient-service.service';
import { RendezvousServiceService } from 'src/services/rendezvous-service.service';

@Component({
  selector: 'app-ajout-rendezvous-patient',
  templateUrl: './ajout-rendezvous-patient.component.html',
  styleUrl: './ajout-rendezvous-patient.component.scss'
})
export class AjoutRendezvousPatientComponent implements OnInit{

  nouveauRendezvousPatient: RendezVous = {
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

    ajouterRendezvous(): void {
      this.rendezvousService.ajouterRendezvous(this.nouveauRendezvousPatient).subscribe(
        (nouveauRendezvous: RendezVous) => {
          this.refreshRendezvous();
          console.log('Rendez-vous ajouté avec succès :', nouveauRendezvous);
          this.gotoList();
        },
        (err: any) => {
          console.error('Erreur lors de l\'ajout du rendez-vous :', err);
        }
      );
    }

    refreshRendezvous(): void {
      this.rendezvousService.getListeRendezvous().subscribe(
        (rendezvous: RendezVous[]) => {
          this.rendezvous = rendezvous;
          this.successMessage = 'Requête valide';
        },
        (err: any) => {
          this.errorMessage = 'Erreur de requête';
        }
      );
    }
    gotoList() {
      this.router.navigate(['/listeRendezvous']);
    }
}