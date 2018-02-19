import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { CollegueService } from './shared/service/collegue.service';

import { AppComponent } from './app.component';
import { UnCollegueComponent } from './un-collegue/un-collegue.component';
import { ClassiqueComponent } from './classique/classique.component';
import { TableauComponent } from './tableau/tableau.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { ScorePipe } from './shared/pipe/score.pipe';
import { FiltrePseudoPipe } from './shared/pipe/filtre-pseudo.pipe';


const appRoutes: Routes = [
  { path: 'classique', component: ClassiqueComponent },
  { path: 'tableau', component: TableauComponent },
  { path: 'carrousel', component: CarrouselComponent },
  // { path: 'detail/:pseudo', component: BComponent },
  { path: '**', redirectTo: 'classique' }
];

@NgModule({
  declarations: [
    AppComponent,
    UnCollegueComponent,
    ClassiqueComponent,
    TableauComponent,
    CarrouselComponent,
    ScorePipe,
    FiltrePseudoPipe
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CollegueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
