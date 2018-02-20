import { Injectable } from '@angular/core';
import { Collegue } from '../domain/collegue';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class CollegueService {
  private collegues: Collegue[];
  private colleguesSub: Subject<Collegue> = new Subject();

  constructor(private http: HttpClient) {
  }
  listerColleguesGet(): Observable<Collegue[]> {
    // récupérer la liste des collègues côté serveur
    let prom: Observable<Collegue[]> = this.http.get<Collegue[]>("http://localhost:8080/collegues");
    prom.subscribe(resp => {
      console.log("listerGet", resp);
      this.collegues = resp;
    }, reject => {
      console.log("listerGet echec", reject);
    });
    return prom;
  }
  listerCollegues(): Observable<Collegue[]> {
    console.log("lister", this.collegues);
    // récupérer la liste des collègues déjà chargé si elle existe
    return this.listerColleguesGet();
    // return Observable.create(ob => {
    //   console.log(ob);
    //   if (this.collegues) {
    //   } else {
    //     this.listerColleguesGet().subscribe(cols => ob(cols));
    //   }
    // })
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
  sauvegarder(newCollegue: Collegue): Observable<Collegue> {
    //sauvegarder le nouveau collègue côté serveur
    const obsApresHttp = this.http.post<Collegue>("http://localhost:8080/collegues", newCollegue);
    return obsApresHttp;
  }
  aimerUnCollegue(unCollegue: Collegue): Observable<Collegue> {
    // TODO Aimer un collègue côté serveur
    const obsApresHttp = this.http.patch<Collegue>("http://localhost:8080/collegues/" + unCollegue.pseudo, { "action": "aimer" });
    return obsApresHttp;
  }
  detesterUnCollegue(unCollegue: Collegue): Observable<Collegue> {
    // TODO Détester un collègue côté serveur
    const obsApresHttp = this.http.patch<Collegue>("http://localhost:8080/collegues/" + unCollegue.pseudo, { "action": "detester" });
    return obsApresHttp;
  }
}
