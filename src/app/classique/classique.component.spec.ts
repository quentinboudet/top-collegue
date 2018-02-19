import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassiqueComponent } from './classique.component';

describe('ClassiqueComponent', () => {
  let component: ClassiqueComponent;
  let fixture: ComponentFixture<ClassiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
