import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotreDernierAvisComponent } from './votre-dernier-avis.component';

describe('VotreDernierAvisComponent', () => {
  let component: VotreDernierAvisComponent;
  let fixture: ComponentFixture<VotreDernierAvisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotreDernierAvisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotreDernierAvisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
