import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../shared/domain/collegue';
import { CollegueService } from '../shared/service/collegue.service';

@Component({
  selector: '[app-un-collegue]',
  templateUrl: './un-collegue.component.html',
  styleUrls: ['./un-collegue.component.css']
})
export class UnCollegueComponent implements OnInit {
  @Input() collegue:Collegue;
  @Input() format:string;
  scoreAction = {ok: ob => this.collegue = ob, echec: echec => console.log("echec PATCH score", echec) };

  hauteurImage:number;
  imageNotFound:boolean = false;
  constructor(private colleguesS?:CollegueService) {
  }

  ngOnInit() {
  }
  jaime(e) {
    e.preventDefault();
    // événement clic sur le bouton "J'aime"
    // => le score du collègue est augmenté de 10
    this.colleguesS.aimerUnCollegue(this.collegue).subscribe(this.scoreAction.ok, this.scoreAction.echec);
  }

  jedeteste(e) {
    e.preventDefault();
    // événement clic sur le bouton "Je déteste"
    // => le score du collègue est diminué de 5
    this.colleguesS.detesterUnCollegue(this.collegue).subscribe(this.scoreAction.ok, this.scoreAction.echec);
  }

  tailler(img: HTMLImageElement){
    console.log("tailler", img);
    this.hauteurImage = img.width;
  }

  defautImage(img: HTMLImageElement){
    //au cas ou l'imge par défaut ne se charge pas non plus on evite un appel infini
    if(!this.imageNotFound){
      this.imageNotFound = true;
      img.src = "assets/images/anonyme.jpg";
    }
  }
}
