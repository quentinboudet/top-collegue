import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnCollegueComponent } from './un-collegue.component';

describe('UnCollegueComponent', () => {
  let component: UnCollegueComponent;
  let fixture: ComponentFixture<UnCollegueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnCollegueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnCollegueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
