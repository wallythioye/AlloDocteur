import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';  // Import correct

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

  constructor(
    private rendezVousService: RendezvousServiceService,
    private router: Router,
    private route: ActivatedRoute 
  ) {}

  ngOnInit(): void {
    this.getListeRendezVous();
    this.route.queryParams.subscribe(params => {
      this.successMessage = params['successMessage'];
    });
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
        console.log('Suppression réussie. ');
        this.refreshRendezvous();
      },
      error  => {
          console.log('Erreur lors de la suppression : ', error);
      }
    );
  }

  confirmDelete(id: number): void {
    const result = confirm('Êtes-vous sûr de vouloir supprimer cette consultation ?');
    if (result) {
      this.deleteRendezvous(id);
    }
  }

  confirmRendezvous(id: number): void {
    const result = confirm('Êtes-vous sûr de vouloir confirmer ce rendez-vous ?');
    if (result) {
      this.rendezVousService.confirmerRendezvous(id).subscribe(
        () => {
          console.log('Confirmation réussie. ');
          this.refreshRendezvous();
        },
        error => {
          console.log('Erreur lors de la confirmation : ', error);
        }
      );
    }
  }

  annulerRendezvous(id: number): void {
    const result = confirm('Êtes-vous sûr de vouloir annuler ce rendez-vous ?');
    if (result) {
      this.rendezVousService.annulerRendezvous(id).subscribe(
        () => {
          console.log('Annulation réussie. ');
          this.refreshRendezvous();
        },
        error => {
          console.log('Erreur lors de l\'annulation : ', error);
        }
      );
    }
  }
}
