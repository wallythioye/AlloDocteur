import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConnexionService } from 'src/services/connexion.service';
import { JwtService } from 'src/services/jwtService';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent{
  loginForm: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private fb: FormBuilder,
     private connexionService: ConnexionService,
     private jwtService: JwtService, 
     private router: Router,
     private route:  ActivatedRoute
     ) {

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  login(): void {
    console.log('LoginForm:', this.loginForm);
  
    if (this.loginForm && this.loginForm.valid) {
      console.log('LoginForm is valid. Proceeding with login.');
  
      const credentials = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      };
      const email =  this.loginForm.value.email;
      const password = this.loginForm.value.password;
  
      if (credentials.email && credentials.password) {
        this.connexionService.login(email, password).subscribe(
          response => {
            console.log('Login successful:', response);
            this.successMessage = 'Connexion réussie. Redirection en cours...';
            localStorage.setItem('token', response.token);
            
            const decodedToken = this.jwtService.decodeToken(response.token);
            this.redirectBasedOnAuthorities(decodedToken.authorities);
          },
          error => {
            console.error('Erreur lors de la connexion:', error);
            if (error instanceof HttpErrorResponse) {
              console.log('Status:', error.status);
              console.log('Message:', error.error.message);
            }
            this.errorMessage = 'Identifiants incorrects. Veuillez réessayer.';
          }
        );
      } else {
        console.error('Email or password is null.');
      }
    } else {
      console.error('LoginForm is null or not valid.');
    }
  }
  

      private redirectBasedOnAuthorities(authorities: string[]): void {
        if (authorities.includes('ADMIN')) {
          this.router.navigate(['/acceuilAdmin']);
        } 
        else if (authorities.includes('MEDECIN')) {
          this.router.navigate(['/acceuilMedecin']);
        } 
        else if (authorities.includes('PATIENT')) {
          this.router.navigate(['/acceuilPatient']);
        } else {
          console.error('Rôle d\'utilisateur inconnu:', authorities);
          this.router.navigate(['/']);
        }
  }
}
