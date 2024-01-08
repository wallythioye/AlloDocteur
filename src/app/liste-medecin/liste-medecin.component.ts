import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Medecin } from 'src/models/medecin';
import { AdminServiceService } from 'src/services/admin-service.service';
import { MedecinService } from 'src/services/medecin-service.service';

@Component({
  selector: 'liste-medecin',
  templateUrl: './liste-medecin.component.html',
  styleUrls: ['./liste-medecin.component.scss']
})
export class ListeMedecinComponent implements OnInit {
  medecins: Medecin[] = [];
  searchTerm: string = '';

  errorMessage = '';
  successMessage = '';

  constructor(private medecinService: MedecinService,
     private adminService: AdminServiceService,
     private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getMedecins();
    this.route.queryParams.subscribe(params => {
      this.successMessage = params['successMessage'];
      this.errorMessage = params['errorMessage'];
    });
  }

  getMedecins(): void {
    this.medecinService.getMedecins().subscribe(
      (medecins: Medecin[]) => {
        this.medecins = medecins;
      },
      (error: any) => {
        console.error('Erreur lors de la récupération des médecins :', error);
        this.errorMessage = 'Erreur lors de la récupération des médecins ';
      }
    );
  }
  refreshMedecin(): void {
    this.medecinService.getMedecins().subscribe(
      {
        next: (medecin: Medecin[]) => {
          this.medecins= medecin;
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

  bloquerUtilisateur(utilisateurId: number): void {
  this.adminService.bloquerUtilisateur(utilisateurId).subscribe(
    () => {
      console.log('Medecin bloqué avec succès.');
      this.successMessage = 'Medecin bloqué avec succès.';
      this.refreshMedecin();
    },
    (error) => {
      console.error('Erreur lors du blocage du medecin', error);
      // this.errorMessage = 'Erreur lors du blocage du medecin';
    }
  );
}

confirmBloquer(utilisateurId: number): void {
  const result = confirm('Êtes-vous sûr de vouloir bloquer ce medecin ?');
  if (result) {
    this.bloquerUtilisateur(utilisateurId);
  }
}

debloquerUtilisateur(utilisateurId: number): void {
  this.adminService.debloquerUtilisateur(utilisateurId).subscribe(
    () => {
      console.log('Medecin débloqué avec succès.');
      this.successMessage = 'Medecin débloqué avec succès.';
      this.refreshMedecin();
    },
    (error) => {
      console.error('Erreur lors du déblocage du medecin', error);
      // this.errorMessage = 'Erreur lors du déblocage du medecin';
    }
  );
}

  confirmDebloquer(utilisateurId: number): void {
    const result = confirm('Voulez vous débloquer ce medecin ?');
    if (result) {
      this.debloquerUtilisateur(utilisateurId);
    }
}


}
