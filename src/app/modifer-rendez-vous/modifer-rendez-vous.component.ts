import { Component } from '@angular/core';
import { RendezVous } from 'src/models/rendezvous';
import { RendezvousServiceService } from 'src/services/rendezvous-service.service';

@Component({
  selector: 'app-modifer-rendez-vous',
  templateUrl: './modifer-rendez-vous.component.html',
  styleUrls: ['./modifer-rendez-vous.component.scss']
})
export class ModiferRendezVousComponent {
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
  modifierRendezvous(rendezvous: RendezVous): void {
    this.rendezvousService.modifierRendezVous(rendezvous).subscribe(
      {
        next: (rendezvousModifie: any) => {
          this.refreshRendezvous();
          console.log('Rendez-vous modifié avec succès :', rendezvousModifie);
        },
        error: (err: any) => {
          console.error('Erreur lors de la modification du rendez-vous :', err);
        }
      }
    );
  }
}
