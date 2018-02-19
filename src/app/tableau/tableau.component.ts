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
  }

  ngOnInit() {
    this.colleguesS.listerCollegues().then(cols => this.collegues = cols);
    // this.collegues = this.colleguesS.listerCollegues();
    console.log("classique", this.collegues);
  }

}
