import { Component, OnInit } from '@angular/core';
import { CollegueService } from '../shared/service/collegue.service';
import { Collegue } from '../shared/domain/collegue';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {
  collegues:Array<Collegue>;

  constructor(private colleguesS:CollegueService) {
    this.collegues = [];
  }

  ngOnInit() {
    this.colleguesS.listeColleguesObs.subscribe(cols => this.collegues = cols);
    this.colleguesS.CollegueObs.subscribe(col => this.collegues.push(col));
  }

}
