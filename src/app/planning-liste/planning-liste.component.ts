import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Planning } from 'src/models/planning';
import { PlanningService } from 'src/services/planning.service';

@Component({
  selector: 'app-planning-liste',
  templateUrl: './planning-liste.component.html',
  styleUrls: ['./planning-liste.component.scss']
})
export class PlanningListeComponent implements OnInit{

  plannings: Planning[] = [];

  errorMessage = '';
  successMessage = '';

  constructor(private planningService : PlanningService, private router : Router){}

  ngOnInit(): void {
    this.getPlanning();
  }

  refreshPlannings(): void {
    this.planningService.getPlanning().subscribe(
      {
        next: (plannings : Planning[]) => {
          this.plannings = plannings;
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

  getPlanning(): void {
    this.planningService.getPlanning().subscribe(
      (plannings: Planning[]) => {
        this.plannings = plannings;
      },
      (error: any) => {
        console.error('Erreur lors de la récupération des planning :', error);
      }
    );
  }

  editPlanning(planningId: number): void {
    this.router.navigate(['/modifierPlanning', planningId]);
  }

  deletePlanning(id: number): void{
    this.planningService.supprimerPlanning(id).subscribe(
      () => {
        console.log('Suppression réussie.');
        this.refreshPlannings();
      },
      error => {
        console.error('Erreur lors de la suppression du planning: ', error);
        
      }
    );
  }
  confirmDelete(id: number): void{
    const result = confirm('Êtes-vous sûr de vouloir supprimer cette planning ?');

    if (result) {
      this.deletePlanning(id);
    }
  }
  
}
  