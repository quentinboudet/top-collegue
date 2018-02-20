import { Component, OnInit } from '@angular/core';
import { CollegueService } from '../shared/service/collegue.service';

@Component({
  selector: 'app-votre-dernier-avis',
  templateUrl: './votre-dernier-avis.component.html',
  styleUrls: ['./votre-dernier-avis.component.css']
})
export class VotreDernierAvisComponent implements OnInit {
  type:string;
  pseudo:string;
  class:string;
  text:string;

  constructor(private colleguesS:CollegueService) { }

  ngOnInit() {
    this.colleguesS.dernierAvisObs.subscribe(avis => {
      this.type = avis.type;
      this.pseudo = avis.pseudo;
      if(this.type == "aimer"){
        this.class = "success";
        this.text = "Vous aimez "+ this.pseudo +".";
      }
      else if(this.type == "detester"){
        this.class = "danger";
        this.text = "Vous detestez "+ this.pseudo +".";
      }
    });
  }

}
