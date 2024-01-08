import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RendezVous } from 'src/models/rendezvous';
import { RendezvousServiceService } from 'src/services/rendezvous-service.service';

@Component({
  selector: 'app-liste-rendezvous-patient',
  templateUrl: './liste-rendezvous-patient.component.html',
  styleUrl: './liste-rendezvous-patient.component.scss'
})
export class ListeRendezvousPatientComponent implements OnInit {
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
      this.errorMessage = params['errorMessage'];
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
        this.errorMessage = 'Erreur lors du chargement de la liste des rendez-vous.'
      }
    );
  }

  editRendezvous(rendezvousId: number): void {
    this.router.navigate(['/modifierRvPatient', rendezvousId]);
  }
  

  confirmEdit(id: number): void {
    const result = confirm('Voulez vous modifier ce rendezvous ?');
    if (result) {
      this.editRendezvous(id);
    }
  }

  deleteRendezvous(id: number): void {
    this.rendezVousService.supprimerRendezvous(id).subscribe(
      () => {
        console.log('Suppression du rendz-vous réussie. ');
        this.successMessage = 'Suppression du rendz-vous réussie.';
        this.refreshRendezvous();
      },
      error  => {
          console.log('Erreur lors de la suppression du rendez-vous : ', error);
          this.errorMessage = 'Erreur lors de la suppression du rendez-vous.';
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
          console.log('Confirmation du rendez-vous réussie. ');
          this.successMessage = 'Confirmation du rendez-vous réussie.';
          this.refreshRendezvous();
        },
        error => {
          console.log('Erreur lors de la confirmation du rendez-vous : ', error);
          this.errorMessage = 'Erreur lors de la confirmation du rendez-vous : ';
        }
      );
    }
  }

  annulerRendezvous(id: number): void {
    const result = confirm('Êtes-vous sûr de vouloir annuler ce rendez-vous ?');
    if (result) {
      this.rendezVousService.annulerRendezvous(id).subscribe(
        () => {
          console.log('Rendez-vous annulé avec succés.');
          this.successMessage = 'Rendez-vous annulé avec succés.';
          this.refreshRendezvous();
        },
        error => {
          console.log('Erreur lors de l\'annulation du rendez-vous : ', error);
          this.errorMessage = 'Erreur lors de l\'annulation du rendez-vous.';
        }
      );
    }
  }
}
