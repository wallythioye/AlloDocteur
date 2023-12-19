import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ServeurService {
  private baseUrl = "http://localhost";
  private port = "8080";
  private apiGlobal = "/api";

  public getFullUrl(): string {
    return this.baseUrl + ":" + this.port + this.apiGlobal;
  }
  public getLoginUrl(): string{
    return this.baseUrl + ":" +this.port;
  }

}