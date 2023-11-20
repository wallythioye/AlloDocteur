import { Component, OnInit } from '@angular/core';
import { Medecin } from 'src/models/medecin';
import { Planning } from 'src/models/planning';
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
      disponibilite : 0

    }

    planning: Planning[]=[];
    errorMessage = '';
    successMessage ='';

    medecins: Medecin[] = [];

    constructor(private planningService: PlanningService,
      private medecinService: MedecinService
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

    ajouterPlanning(): void {
      this.planningService.ajoutPlanning(this.nouveauPlanning).subscribe(
        (nouveauPlanning: Planning) => {
          console.log('Planning ajouté avec succès :', nouveauPlanning);
        },
        (err: any) => {
          console.error('Erreur lors de l\'ajout du planning :', err);
        }
      );
    }

}
