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
    idPatient: 0,
    idMedecin: 0,
    date: new Date(),
    dateCreation: new  Date(),
    motif: '',
    medecin: {} as Medecin,
    patient: { } as Patient,
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
    this.getMedecins();
    this.nouveauRendezvousPatient.date = new Date();
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

    prendreRendezvous(): void {
      this.rendezvousService.prendreRendezvous(this.nouveauRendezvousPatient).subscribe(
        (rendezVous: RendezVous) => {
          console.log('Prise de rendez-vous réussie. ', rendezVous);
          this.successMessage = 'Prise de rendez-vous réussie.';
          this.gotoList();
          this.refreshRendezvous();
        },
        (error: any) => {
          console.error('Erreur lors de la prise de rendez-vous : ', error);
          this.errorMessage = 'Erreur lors de la prise de rendez-vous.';
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
