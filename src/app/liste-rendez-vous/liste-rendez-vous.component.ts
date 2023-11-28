import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RendezVous } from 'src/models/rendezvous';
import { RendezvousServiceService } from 'src/services/rendezvous-service.service';

@Component({
  selector: 'app-liste-rendez-vous',
  templateUrl: './liste-rendez-vous.component.html',
  styleUrls: ['./liste-rendez-vous.component.scss']
})
export class ListeRendezVousComponent implements OnInit {

  listeRendezVous: RendezVous[] = [];

  errorMessage = '';
  successMessage = '';

  constructor(private rendezVousService: RendezvousServiceService, private router: Router) {}

  ngOnInit(): void {
    this.getListeRendezVous();
  }

  refreshRendezvous(): void {
    this.rendezVousService.getListeRendezvous().subscribe(
      {
        next: (rendezvous: RendezVous[]) => {
          this.listeRendezVous = rendezvous;
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

  editRendezvous(rendezvousId: number): void {
    this.router.navigate(['/modifierRv', rendezvousId]);
  }

  deleteRendezvous(id: number): void {
    this.rendezVousService.supprimerRendezvous(id).subscribe(
      () => {
        console.log('Suppression réussit. ');
        this.refreshRendezvous();
      },
      error  => {
          console.log('Erreur lors de la suppression : ', error);
      }
    );
    }
    confirmDelete(id: number): void{
      const result = confirm('Êtes-vous sûr de vouloir supprimer cette consultation ?');
      if(result){
        this.deleteRendezvous(id);
      }
    }
}
