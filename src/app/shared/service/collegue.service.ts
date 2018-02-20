import { Injectable } from '@angular/core';
import { Collegue } from '../domain/collegue';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class CollegueService {
  connecter:boolean;

  private listeColleguesSub: Subject<Collegue[]> = new BehaviorSubject(new Array<Collegue>());
  private collegueSub: Subject<Collegue> = new Subject();
  private dernierAvisSub: Subject<{type, pseudo}> = new Subject();

  constructor(private http: HttpClient) {
    this.connecter = false;
    this.testConnexion();
    this.listerCollegues();
  }

  testConnexion(): void {
    // récupérer la liste des collègues côté serveur
    let obs: Observable<any> = this.http.get("http://localhost:8080/collegues");
    setInterval(() => {
      obs = this.http.get("http://localhost:8080/collegues");
      obs.subscribe(
        resp => this.connecter = true, 
        err => this.connecter = false
      );
    }, 5000);
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
  get collegueObs(): Observable<Collegue> {
    return this.collegueSub.asObservable();
  }

  get dernierAvisObs(): Observable<{type, pseudo}> {
    return this.dernierAvisSub.asObservable();
  }

  sauvegarder(newCollegue: Collegue): Observable<Collegue> {
    //sauvegarder le nouveau collègue côté serveur
    const obsApresHttp = this.http.post<Collegue>("http://localhost:8080/collegues", newCollegue);
    obsApresHttp.subscribe(col => this.collegueSub.next(col));
    return this.collegueObs;
  }

  aimerUnCollegue(unCollegue: Collegue): Observable<Collegue> {
    // TODO Aimer un collègue côté serveur
    const obsApresHttp = this.http.patch<Collegue>("http://localhost:8080/collegues/" + unCollegue.pseudo, { "action": "aimer" });
    obsApresHttp.subscribe(col => this.dernierAvisSub.next({type: "aimer", pseudo: col.pseudo}));
    return obsApresHttp;
  }

  detesterUnCollegue(unCollegue: Collegue): Observable<Collegue> {
    // TODO Détester un collègue côté serveur
    const obsApresHttp = this.http.patch<Collegue>("http://localhost:8080/collegues/" + unCollegue.pseudo, { "action": "detester" });
    obsApresHttp.subscribe(col => this.dernierAvisSub.next({type: "detester", pseudo: col.pseudo}));
    return obsApresHttp;
  }
}
