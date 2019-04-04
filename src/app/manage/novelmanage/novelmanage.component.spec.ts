import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovelmanageComponent } from './novelmanage.component';

describe('NovelmanageComponent', () => {
  let component: NovelmanageComponent;
  let fixture: ComponentFixture<NovelmanageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovelmanageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovelmanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
