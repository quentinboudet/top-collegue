import { Component, OnInit } from '@angular/core';
import { Collegue } from './shared/domain/collegue';
import { CollegueService } from './shared/service/collegue.service';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public pseudoAjout:string = "";

  constructor(private colleguesS:CollegueService, private http:HttpClient) {
  }

  ngOnInit():void {
  }
  
  add(pseudo:HTMLInputElement, imageUrl:HTMLInputElement ,e){
    e.preventDefault();
    let newCollegue:Collegue = new Collegue(pseudo.value, imageUrl.value, 0);
    this.colleguesS.sauvegarder(newCollegue).subscribe(response =>{
      this.pseudoAjout = response.pseudo;
      pseudo.value = "";
      imageUrl.value = "";
    }, reject =>{
      //TODO en cas d'erreur
      console.log(reject);
    });
  }
}
