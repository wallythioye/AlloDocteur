import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Medecin } from 'src/models/medecin';
import { Patient } from 'src/models/patient';
import { RendezVous } from 'src/models/rendezvous';
import { RendezvousServiceService } from 'src/services/rendezvous-service.service';

@Component({
  selector: 'app-modifier-rendezvous-patient',
  templateUrl: './modifier-rendezvous-patient.component.html',
  styleUrl: './modifier-rendezvous-patient.component.scss'
})
export class ModifierRendezvousPatientComponent implements OnInit{
  
  id!: number;
  rendezvous: RendezVous ={
    id: 0,
    idPatient: 0,
    idMedecin: 0,
    date: new Date(),
    dateCreation: new  Date(),
    motif: '',
    medecin: {} as Medecin,
    patient: { } as Patient,
    statut: 'confirmer'
  }

  listeRendezvous: RendezVous[] = [];
  errorMessage = "";
  successMessage = "";

  constructor(
    private rendezvousService: RendezvousServiceService,
    private route: ActivatedRoute,
    private router: Router
    ) {}

    ngOnInit(): void {
      this.id = +this.route.snapshot.params['id'];
      this.getListRendezvous();
    }

  refreshRendezvous(): void {
    this.rendezvousService.getListeRendezvous().subscribe(
      {
        next: (rendezvous: RendezVous[]) => {
          this.listeRendezvous = rendezvous;
        },
        error: (err: any) => {
          this.errorMessage = "Erreur de requête";
        },
        complete: () => {
          this.successMessage = "Requête valide";
        }
      }
    );
  }

  getListRendezvous(): void{
    this.rendezvousService.getListeRendezvous().subscribe(
      (rendezvouss) => {
        this.listeRendezvous = rendezvouss;

        this.rendezvous =
        this.listeRendezvous.find((r) => r.id === this.id) || {
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
      },
      (error) => {
        console.error('Erreur lors du chargement du liste des rendezvous', error);
      }
    );
  }
  
  updateRendezvous() {
    this.rendezvousService.modifierRendezVous(this.id, this.rendezvous).subscribe(
      (data: RendezVous) => {
        console.log(data);
        // Mettez à jour la consultation si nécessaire
        this.gotoList();
      },
      (error: any) => console.log(error)
    );
  }
  onSubmit() {
    this.updateRendezvous();
  }

  gotoList() {
    this.router.navigate(['/listeRendezvousPatient']);
  }

}
