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
    this.colleguesS.listerCollegues().subscribe(cols => {
      console.log("Oninit", cols);
      this.collegues = cols
    });
    // this.collegues = this.colleguesS.listerCollegues();
    console.log("classique", this.collegues);
  }

  setLimite(val){
    if(val > 0) this.nombreAfficher = val;
    else this.nombreAfficher = this.collegues.length;
  }
  setFiltrePseudo(value){
    this.filtrePseudoVal = value;
  }
}
