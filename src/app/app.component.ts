import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Collegue } from './shared/domain/collegue';
import { CollegueService } from './shared/service/collegue.service';
import { reject } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public collegues:Array<Collegue> = [];
  public pseudoAjout:string = "";

  constructor(private colleguesS:CollegueService) {
  }

  ngOnInit():void {
    this.colleguesS.listerCollegues().then(resp => {
      this.collegues = resp;
    }, reject => {
      console.log(reject);
    });
  }
  add(pseudo:HTMLInputElement, imageUrl:HTMLInputElement ,e){
    e.preventDefault();
    let newCollegue:Collegue = new Collegue(pseudo.value, imageUrl.value, 0);
    this.collegues.push(newCollegue);
    this.colleguesS.sauvegarder(newCollegue);
    this.pseudoAjout = pseudo.value;
    pseudo.value = "";
    imageUrl.value = "";
  }
}
