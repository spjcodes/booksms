import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherbookmanageComponent } from './otherbookmanage.component';

describe('OtherbookmanageComponent', () => {
  let component: OtherbookmanageComponent;
  let fixture: ComponentFixture<OtherbookmanageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherbookmanageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherbookmanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
