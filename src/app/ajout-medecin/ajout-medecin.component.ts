import { Component } from '@angular/core';
import { Medecin } from 'src/models/medecin';
import { MedecinService } from 'src/services/medecin-service.service';

@Component({
  selector: 'app-ajout-medecin',
  templateUrl: './ajout-medecin.component.html',
  styleUrls: ['./ajout-medecin.component.scss']
})
export class AjoutMedecinComponent {
  medecins: Medecin[] = [];
  errorMessage = "";
  successMessage = "";

  constructor(private medecinService: MedecinService) {}

  refreshMedecins(): void {
    this.medecinService.getMedecins().subscribe(
      {
        next: (medecins: Medecin[]) => {
          this.medecins = medecins;
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

  ajouterMedecin(medecin: Medecin): void {
    this.medecinService.ajouterMedecin(medecin).subscribe(
      {
        next: (nouveauMedecin: any) => {
          this.refreshMedecins();
          console.log('Médecin ajouté avec succès :', nouveauMedecin);
        },
        error: (err: any) => {
          console.error('Erreur lors de l\'ajout du médecin :', err);
        }
      }
    );
  }

  modifierMedecin(medecin: Medecin): void {
    this.medecinService.modifierMedecin(medecin).subscribe(
      {
        next: (medecinModifie: any) => {
          this.refreshMedecins();
          console.log('Médecin modifié avec succès :', medecinModifie);
        },
        error: (err: any) => {
          console.error('Erreur lors de la modification du médecin :', err);
        }
      }
    );
  }
}
