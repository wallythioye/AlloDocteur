import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Planning } from 'src/models/planning';
import { PlanningService } from 'src/services/planning.service';

@Component({
  selector: 'app-liste-planning-patient',
  templateUrl: './liste-planning-patient.component.html',
  styleUrl: './liste-planning-patient.component.scss'
})
export class ListePlanningPatientComponent implements OnInit {
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
    this.planningService.getPlanningPatient().subscribe(
      (plannings: Planning[]) => {
        this.plannings = plannings;
      },
      (error: any) => {
        console.error('Erreur lors de la récupération des planning :', error);
        this.errorMessage = 'Erreur lors de la récupération des planning.';
      }
    );
  }
}
