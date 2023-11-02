import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class ServeurService{
    public baseUrl = "http://localhost";
    public port = "8080";
    public apiGlobal=  "/api"
    public getFullUrl(){
        return this.baseUrl+":"+this.port+this.apiGlobal;
    }
}