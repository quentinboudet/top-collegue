import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Collegue } from './shared/domain/collegue';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public collegues:Array<Collegue> = [];
  public pseudoAjout:string = "";
  ngOnInit():void {
    this.collegues.push(new Collegue("freak", "truc/imgf.png", 50));
    this.collegues.push(new Collegue("drodo", "truc/imgf.png", 20));
    this.collegues.push(new Collegue("piko", "truc/imgf.png", 100));
    this.collegues.push(new Collegue("groop", "truc/imgf.png", 120));
    this.collegues.push(new Collegue("veuti", "truc/imgf.png", 40));
  }
  add(pseudo:HTMLInputElement, imageUrl:HTMLInputElement ,e){
    e.preventDefault();
    this.collegues.push(new Collegue(pseudo.value, imageUrl.value, 0));
    this.pseudoAjout = pseudo.value;
    pseudo.value = "";
    imageUrl.value = "";
  }
}
