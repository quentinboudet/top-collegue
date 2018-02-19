import { Injectable } from '@angular/core';
import { Collegue } from '../domain/collegue';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class CollegueService {
  private collegues: Collegue[];

  constructor(private http: HttpClient) {
  }
  listerColleguesGet(): Promise<Collegue[]> {
    // récupérer la liste des collègues côté serveur
    let prom: Promise<Collegue[]> = this.http.get<Collegue[]>("http://localhost:8080/collegues").toPromise();
    prom.then(resp => {
      this.collegues = resp;
      return resp;
    }, reject => {
      console.log(reject);
    });
    return prom;
  }
  listerCollegues(): Promise<Collegue[]> {
    console.log("lister", this.collegues);
    // récupérer la liste des collègues déjà chargé si elle existe
    return new Promise((resolve, reject) => {
      if (this.collegues) {
        resolve(this.collegues);
      } else {
        this.listerColleguesGet().then(cols => resolve(cols));
      }
    })
  }
  // listerCollegues(): Collegue[] {
  //   console.log("lister", this.collegues);
  //   // récupérer la liste des collègues déjà chargé si elle existe
  //   let c:Collegue[];
  //   let cprom:Promise<Collegue[]> = new Promise((resolve, reject) => {
  //     if(this.collegues) {
  //       resolve(this.collegues);
  //       console.log("listerprom", c);
  //     } else {
  //       this.listerColleguesGet().then(cols => resolve(cols));
  //     }
  //   });
  //   cprom.then(cols => {
  //     c = cols;
  //     console.log("listerthen", c);
  //   });
  //   return c;
  // }
  sauvegarder(newCollegue: Collegue): Promise<Collegue> {
    // TODO sauvegarder le nouveau collègue côté serveur
    return this.http.post<Collegue>("http://localhost:8080/collegues", newCollegue).toPromise();
  }
  aimerUnCollegue(unCollegue: Collegue): Promise<Collegue> {
    // TODO Aimer un collègue côté serveur
    return this.http.patch<Collegue>("http://localhost:8080/collegues/" + unCollegue.pseudo, { "action": "aimer" }).toPromise();
  }
  detesterUnCollegue(unCollegue: Collegue): Promise<Collegue> {
    // TODO Détester un collègue côté serveur
    return this.http.patch<Collegue>("http://localhost:8080/collegues/" + unCollegue.pseudo, { "action": "detester" }).toPromise();
  }
}
