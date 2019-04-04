import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherbooksComponent } from './otherbooks.component';

describe('OtherbooksComponent', () => {
  let component: OtherbooksComponent;
  let fixture: ComponentFixture<OtherbooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherbooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
