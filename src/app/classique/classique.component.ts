import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '../app.component';
import { CollegueService } from '../shared/service/collegue.service';
import { Collegue } from '../shared/domain/collegue';

@Component({
  selector: 'app-classique',
  templateUrl: './classique.component.html',
  styleUrls: ['./classique.component.css']
})
export class ClassiqueComponent implements OnInit{
  collegues:Array<Collegue>;
  nombreAfficher:number;
  filtrePseudoVal:string;

  constructor(private colleguesS:CollegueService) {
    this.filtrePseudoVal = "";
  }

  ngOnInit() {
    this.colleguesS.listeColleguesObs.subscribe(cols => this.collegues = cols);

    this.colleguesS.collegueObs.subscribe(col => this.collegues.push(col));
  }

  setLimite(val){
    if(val > 0) this.nombreAfficher = val;
    else this.nombreAfficher = this.collegues.length;
  }
  setFiltrePseudo(value){
    this.filtrePseudoVal = value;
  }
}
