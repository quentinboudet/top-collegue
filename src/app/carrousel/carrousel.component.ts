import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { CollegueService } from '../shared/service/collegue.service';
import { Collegue } from '../shared/domain/collegue';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent implements OnInit {
  collegues:Array<Collegue>;

  constructor(private colleguesS:CollegueService) {
  }

  ngOnInit() {
    this.colleguesS.listerCollegues().subscribe(cols => this.collegues = cols);
    // this.collegues = this.colleguesS.listerCollegues();
    console.log("classique", this.collegues);
  }

}
