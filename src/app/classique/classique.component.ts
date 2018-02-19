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

  constructor(private colleguesS:CollegueService) {
  }

  ngOnInit() {
    this.colleguesS.listerCollegues().then(cols => this.collegues = cols);
    // this.collegues = this.colleguesS.listerCollegues();
    console.log("classique", this.collegues);
  }

}
