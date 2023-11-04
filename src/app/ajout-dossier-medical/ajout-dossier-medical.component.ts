import { Component, OnInit } from '@angular/core';
import { DossierMedicale } from 'src/models/dossierMedicale';
import { DossierMedicalService } from 'src/services/dossier-medical-service.service';

@Component({
  selector: 'app-ajout-dossier-medical',
  templateUrl: './ajout-dossier-medical.component.html',
  styleUrls: ['./ajout-dossier-medical.component.scss']
})
export class AjoutDossierMedicalComponent implements OnInit {
  dossiers: DossierMedicale[] = [];
  errorMessage = "";
  successMessage = "";

  constructor(private dossierService: DossierMedicalService) {}

  ngOnInit(): void {
    this.refreshDossiers();
  }

  refreshDossiers(): void {
    this.dossierService.getDossierMedical().subscribe(
      {
        next: (dossiers: DossierMedicale[]) => {
          this.dossiers = dossiers;
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

  ajouterDossier(dossier: DossierMedicale): void {
    this.dossierService.ajoutDossierMedical(dossier).subscribe(
      {
        next: (newDossier: any) => {
          this.refreshDossiers(); 
          console.log('Dossier ajouté avec succès :', newDossier);
        },
        error: (err: any) => {
          console.error('Erreur lors de l\'ajout du dossier :', err);
        }
      }
    );
  }

  modifierDossier(dossier: DossierMedicale): void {
    this.dossierService.modifierDossierMedical(dossier).subscribe(
      {
        next: (updatedDossier: any) => {
          this.refreshDossiers(); 
          console.log('Dossier modifié avec succès :', updatedDossier);
        },
        error: (err: any) => {
          console.error('Erreur lors de la modification du dossier :', err);
        }
      }
    );
  }

  supprimerDossier(id: number): void {
    this.dossierService.supprimerDossierMedical(id).subscribe(
      {
        next: () => {
          this.refreshDossiers(); 
          console.log('Dossier supprimé avec succès');
        },
        error: (err: any) => {
          console.error('Erreur lors de la suppression du dossier :', err);
        }
      }
    );
  }
}
