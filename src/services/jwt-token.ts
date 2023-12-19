// import { Injectable } from '@angular/core';
// import jwt_decode, { JwtPayload } from 'jwt-decode';

// @Injectable({
//   providedIn: 'root'
// })
// export class JWTTokenService {

//   private jwtToken: string = '';
//   private decodedToken!: JwtPayload; // Utilisation du type JwtPayload fourni par la bibliothèque

//   constructor() { }

//   setToken(token: string): void {
//     if (token) {
//       this.jwtToken = token;
//     }
//   }

//   decodeToken(): void {
//     if (this.jwtToken) {
//       this.decodedToken = jwt_decode(this.jwtToken) as JwtPayload; // Utilisation du type JwtPayload
//     }
//   }

//   getDecodeToken(): JwtPayload {
//     this.decodeToken();
//     return this.decodedToken;
//   }

//   getUser(): string {
//     this.decodeToken();
//     return this.decodedToken ? this.decodedToken.displayname : null;
//   }

//   getEmailId(): string {
//     this.decodeToken();
//     return this.decodedToken ? this.decodedToken.email : null;
//   }

//   getExpiryTime(): string {
//     this.decodeToken();
//     return this.decodedToken ? this.decodedToken.exp : null;
//   }

//   isTokenExpired(): boolean {
//     const expiryTime: number = +this.getExpiryTime();
//     if (expiryTime) {
//       return (expiryTime * 1000 - Date.now()) < 5000;
//     } else {
//       return false;
//     }
//   }
// }
