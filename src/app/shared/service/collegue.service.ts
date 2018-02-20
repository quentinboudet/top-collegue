import { Injectable } from '@angular/core';
import { Collegue } from '../domain/collegue';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class CollegueService {
  private listeColleguesSub: Subject<Collegue[]> = new BehaviorSubject(new Array<Collegue>());
  private collegueSub: Subject<Collegue> = new Subject();

  constructor(private http: HttpClient) {
    this.listerCollegues();
  }
  listerCollegues(): void {
    // récupérer la liste des collègues côté serveur
    let obs: Observable<Collegue[]> = this.http.get<Collegue[]>("http://localhost:8080/collegues");
    obs.subscribe(
      resp => this.listeColleguesSub.next(resp), 
      reject => console.log("lister GET echec", reject)
    );
  }
  // this.collegueService.listeColleguesObs.subscribe()
  get listeColleguesObs(): Observable<Collegue[]> {
    return this.listeColleguesSub.asObservable();
  }
  // this.collegueService.CollegueObs.subscribe()
  get CollegueObs(): Observable<Collegue> {
    return this.collegueSub.asObservable();
  }
  sauvegarder(newCollegue: Collegue): Observable<Collegue> {
    //sauvegarder le nouveau collègue côté serveur
    const obsApresHttp = this.http.post<Collegue>("http://localhost:8080/collegues", newCollegue);
    obsApresHttp.subscribe(col => this.collegueSub.next(col));
    return this.CollegueObs;
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
