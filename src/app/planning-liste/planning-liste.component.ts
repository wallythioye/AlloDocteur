import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private planningService : PlanningService, private router : Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.getPlanning();
    this.route.queryParams.subscribe(params => {
      this.successMessage = params['successMessage'];
      this.errorMessage = params['errorMessage'];
    });
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
        this.errorMessage = 'Erreur lors de la récupération des planning.';
      }
    );
  }

  editPlanning(planningId: number): void {
    this.router.navigate(['/modifierPlanning', planningId]);
  }
  confirmEdit(id: number): void {
    const result = confirm('Voulez vous modifier ce planning ?');
    if (result) {
      this.editPlanning(id);
    }
  }

  deletePlanning(id: number): void{
    this.planningService.supprimerPlanning(id).subscribe(
      () => {
        console.log('Suppression du planning réussie.');
        this.successMessage = 'Suppression du planning réussie.';
        this.refreshPlannings();
      },
      error => {
        console.error('Erreur lors de la suppression du planning: ', error);
        this.errorMessage = 'Erreur lors de la suppression du planning';
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
  