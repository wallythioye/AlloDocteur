import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medecin } from 'src/models/medecin';
import { Patient } from 'src/models/patient';
import { RendezVous } from 'src/models/rendezvous';
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

  patients: Patient[] = [];
  medecins: Medecin[] = [];

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
      this.rendezvousService.ajouterRendezvous(this.nouveauRendezvous).subscribe(
        (nouveauRendezvous: RendezVous) => {
          console.log('Rendez-vous ajouté avec succès :', nouveauRendezvous);
          this.refreshRendezvous();
          this.gotoList('Rendez-vous ajouté avec succès');
        },
        (err: any) => {
          console.error('Erreur lors de l\'ajout du rendez-vous :', err);
          this.errorMessage = 'Erreur d\'ajout du rendez-vous';
        }
      );
    }
    
    
    
    gotoList(successMessage: string): void {
      this.router.navigate(['/listeRendezvous'], { queryParams: { successMessage } });
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
}