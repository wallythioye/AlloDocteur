import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medecin } from 'src/models/medecin';
import { Planning } from 'src/models/planning';
import { PlanningService } from 'src/services/planning.service';

@Component({
  selector: 'app-modifier-planning',
  templateUrl: './modifier-planning.component.html',
  styleUrl: './modifier-planning.component.scss'
})
export class ModifierPlanningComponent implements OnInit{
  id!: number;
  planning:  Planning = {
      id: 0,
      medecin: {} as Medecin,
      date:new  Date(),
      disponibilite : 0,
      idMedecin: 0
  }

  listePlannings : Planning[] = [];

  errorMessage = '';
  successMessage = '';
  constructor(
    private planningService: PlanningService,
    private route: ActivatedRoute,
    private router: Router
  ){

  }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
    this.getListePlannings();
  }

  refreshPlannings(): void {
    this.planningService.getPlanning().subscribe(
      {
        next: (plannings : Planning[]) => {
          this.listePlannings = plannings;
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

  getListePlannings(): void{
    this.planningService.getPlanning().subscribe(
      (plannings) => {
        this.listePlannings = plannings;

        this.planning =
         this.listePlannings.find((p) => p.id === this.id) || {
          id: 0,
          medecin: {} as Medecin,
          date:new  Date(),
          disponibilite : 0,
          idMedecin: 0
         };
      },
      (error) => {
        console.error('Erreur lors du chargement de la liste des plannings', error);
      }
    )
  }

  updatePlanning() {
    this.planningService.modifierPlanning(this.id, this.planning)
      .subscribe((data: Planning) => {
        console.log(data);

        this.gotoList();
      },
      (error: any) => console.log(error)
      );
  }

  onSubmit() {
    this.updatePlanning();
  }

  gotoList(){
    this.router.navigate(['/listePlanning']);
  }

  
}
