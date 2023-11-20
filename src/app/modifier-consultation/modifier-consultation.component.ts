import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Consultation } from 'src/models/consultation';
import { ConsultationService } from 'src/services/consultation.service';

@Component({
  selector: 'app-modifier-consultation',
  templateUrl: './modifier-consultation.component.html',
  styleUrls: ['./modifier-consultation.component.scss'],
})
export class ModifierConsultationComponent implements OnInit {
 @Input() consultation!: Consultation ;
  constructor(
    private consultationService: ConsultationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Récupérez l'ID de la consultation à partir de la route
    const consultationId = this.route.snapshot.paramMap.get('id');

    if (consultationId) {
      // Utilisez le service pour obtenir les détails de la consultation
      this.consultationService.getConsultationById(+consultationId).subscribe(
        (resultat) => {
          // Mettez à jour les détails de la consultation dans le composant
          this.consultation = resultat;
        },
        (erreur) => {
          console.error('Erreur lors de la récupération des détails de la consultation : ', erreur);
        }
      );
    }
  }

  modifierConsultation() {
    // Assurez-vous que tous les champs requis sont remplis avant de procéder à la modification
    if (this.champsSontValides()) {
      this.consultationService.modifierConsultation(this.consultation)
        .subscribe(
          (resultat) => {
            // Traitement réussi
            console.log('Consultation modifiée avec succès : ', resultat);
            // Vous pouvez ajouter ici une redirection ou d'autres actions nécessaires après la modification réussie
          },
          (erreur) => {
            // Gérer l'erreur ici
            console.error('Erreur lors de la modification de la consultation : ', erreur);
          }
        );
    } else {
      // Gérer le cas où les champs ne sont pas valides
      console.error('Veuillez remplir tous les champs obligatoires.');
    }
  }

  private champsSontValides(): boolean {
    // Ajoutez ici la logique pour vérifier que tous les champs nécessaires sont remplis
    // Retournez true si tout est valide, sinon false
    // Par exemple :
    return !!this.consultation.medecin_id && !!this.consultation.patient_id && !!this.consultation.date;
  }
}
