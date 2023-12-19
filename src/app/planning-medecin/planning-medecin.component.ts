import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medecin } from 'src/models/medecin';
import { Planning } from 'src/models/planning';
// import { Utilisateur } from 'src/models/utilisateur';
import { MedecinService } from 'src/services/medecin-service.service';
import { PlanningService } from 'src/services/planning.service';

@Component({
  selector: 'app-planning-medecin',
  templateUrl: './planning-medecin.component.html',
  styleUrls: ['./planning-medecin.component.scss']
})
export class PlanningMedecinComponent  implements OnInit{
    
    nouveauPlanning: Planning = {
      id: 0,
      medecin: {} as Medecin,
      date:new  Date(),
      disponibilite : 0,
      idMedecin: 0
    }

    planning: Planning[]=[];
    errorMessage = '';
    successMessage ='';

    medecins: Medecin[] = [];

    constructor(private planningService: PlanningService,
      private medecinService: MedecinService, private router: Router
      ){}

    ngOnInit(): void {
      this.getMedecins();
    }
    getMedecins(): void {
      this.medecinService.getMedecins().subscribe(
        (medecins: Medecin[]) => {
          this.medecins = medecins;
        },
        (error: any) => {
          console.error('Erreur lors de la récupération des médecins :', error);
        }
      );
    }

    refreshPlannings(): void {
      this.planningService.getPlanning().subscribe(
        {
          next: (plannings : Planning[]) => {
            this.planning = plannings;
          },
          error: (err: any) => {
            this.errorMessage = 'Erreur de requête';
          },
          complete: () => {
            this.successMessage = 'Requête valide';
          },
        }
      );
    }

    ajouterPlanning(): void {
      this.planningService.ajoutPlanning(this.nouveauPlanning).subscribe(
        (nouveauPlanning: Planning) => {
          console.log('Planning ajouté avec succès :', nouveauPlanning);
          this.refreshPlannings();
          this.gotoList('Planning ajouté avec succès');
        },
        (err: any) => {
          console.error('Erreur lors de l\'ajout du planning :', err);
          this.errorMessage = 'Erreur lors de l\'ajout du planning';
        }
      );
    }

    gotoList(successMessage: string): void {
      this.router.navigate(['/listePlanning'], { queryParams: { successMessage } });
    }

}
