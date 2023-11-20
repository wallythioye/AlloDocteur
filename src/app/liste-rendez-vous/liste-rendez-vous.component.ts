import { Component, OnInit } from '@angular/core';
import { RendezVous } from 'src/models/rendezvous';
import { RendezvousServiceService } from 'src/services/rendezvous-service.service';

@Component({
  selector: 'app-liste-rendez-vous',
  templateUrl: './liste-rendez-vous.component.html',
  styleUrls: ['./liste-rendez-vous.component.scss']
})
export class ListeRendezVousComponent implements OnInit {

  listeRendezVous: RendezVous[] = [];

  constructor(private rendezVousService: RendezvousServiceService) {}

  ngOnInit(): void {
    this.getListeRendezVous();
  }

  getListeRendezVous(): void {
    this.rendezVousService.getListeRendezvous().subscribe(
      (rendezVous: RendezVous[]) => {
        this.listeRendezVous = rendezVous;
      },
      (error: any) => {
        console.error('Erreur lors du chargement de la liste des rendez-vous', error);
      }
    );
  }
}
