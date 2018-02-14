import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../shared/domain/collegue';

@Component({
  selector: 'app-un-collegue',
  templateUrl: './un-collegue.component.html',
  styleUrls: ['./un-collegue.component.css']
})
export class UnCollegueComponent implements OnInit {
  @Input() collegue:Collegue;
  constructor() { }

  ngOnInit() {
  }

  jaime(e) {
    e.preventDefault();
    // événement clic sur le bouton "J'aime"
    // => le score du collègue est augmenté de 10
    this.collegue.score += 10;
  }

  jedeteste(e) {
    e.preventDefault();
    // événement clic sur le bouton "Je déteste"
    // => le score du collègue est diminué de 5
    this.collegue.score -= 5;
  }
}
