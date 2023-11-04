import { Component } from '@angular/core';
import { RendezVous } from 'src/models/rendezvous';
import { RendezvousServiceService } from 'src/services/rendezvous-service.service';


@Component({
  selector: 'app-ajout-rendezvous-medecin',
  templateUrl: './ajout-rendezvous-medecin.component.html',
  styleUrls: ['./ajout-rendezvous-medecin.component.scss']
})
export class AjoutRendezvousMedecinComponent {
  rendezvous: RendezVous[] = [];
  errorMessage = "";
  successMessage = "";

  constructor(private rendezvousService: RendezvousServiceService) {}

  refreshRendezvous(): void {
    this.rendezvousService.getRendezvous().subscribe(
      {
        next: (rendezvous: RendezVous[]) => {
          this.rendezvous = rendezvous;
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

  ajouterRendezvous(rendezvous: RendezVous): void {
    this.rendezvousService.ajouterRendezvous(rendezvous).subscribe(
      {
        next: (nouveauRendezvous: any) => {
          this.refreshRendezvous();
          console.log('Rendez-vous ajouté avec succès :', nouveauRendezvous);
        },
        error: (err: any) => {
          console.error('Erreur lors de l\'ajout du rendez-vous :', err);
        }
      }
    );
  }

}
