import { Component, OnInit } from '@angular/core';
import { Planning } from 'src/models/planning';
import { PlanningService } from 'src/services/planning.service';

@Component({
  selector: 'app-planning-liste',
  templateUrl: './planning-liste.component.html',
  styleUrls: ['./planning-liste.component.scss']
})
export class PlanningListeComponent implements OnInit{

  plannings: Planning[] = [];

  constructor(private planningService : PlanningService){}

  ngOnInit(): void {
    this.getPlanning();
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
}
