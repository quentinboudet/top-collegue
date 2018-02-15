import { Injectable } from '@angular/core';
import { Collegue } from '../domain/collegue';
import { HttpClient } from  '@angular/common/http';


@Injectable()
export class CollegueService {

  constructor(private http:HttpClient) { }
  listerCollegues(): Promise<Collegue[]> {
    // récupérer la liste des collègues côté serveur
    return this.http.get<Collegue[]>("http://localhost:8080/collegues").toPromise();
  }
  sauvegarder(newCollegue: Collegue): Promise<Collegue> {
    // TODO sauvegarder le nouveau collègue côté serveur
    console.log(JSON.stringify(newCollegue));
    return this.http.post<Collegue>("http://localhost:8080/collegues", newCollegue).toPromise();
  }
  aimerUnCollegue(unCollegue: Collegue): Promise<Collegue> {
    // TODO Aimer un collègue côté serveur
    return this.http.patch<Collegue>("http://localhost:8080/collegues/"+unCollegue.pseudo, {"action": "aimer"}).toPromise();
  }
  detesterUnCollegue(unCollegue: Collegue): Promise<Collegue> {
    // TODO Détester un collègue côté serveur
    return this.http.patch<Collegue>("http://localhost:8080/collegues/"+unCollegue.pseudo, {"action": "detester"}).toPromise();
  }
}
