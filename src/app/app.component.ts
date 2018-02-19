import { Component, OnInit } from '@angular/core';
import { Collegue } from './shared/domain/collegue';
import { CollegueService } from './shared/service/collegue.service';

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
    this.colleguesS.listerCollegues().then(cols => this.collegues = cols);
    // this.collegues = this.colleguesS.listerCollegues();
  }
  add(pseudo:HTMLInputElement, imageUrl:HTMLInputElement ,e){
    e.preventDefault();
    let newCollegue:Collegue = new Collegue(pseudo.value, imageUrl.value, 0);
    this.colleguesS.sauvegarder(newCollegue).then(response =>{
      this.collegues.push(response);
      this.pseudoAjout = response.pseudo;
      pseudo.value = "";
      imageUrl.value = "";
    }, reject =>{
      //TODO en cas d'erreur
      console.log(reject);
    });
  }
}
