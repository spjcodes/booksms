import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextbookmanageComponent } from './textbookmanage.component';

describe('TextbookmanageComponent', () => {
  let component: TextbookmanageComponent;
  let fixture: ComponentFixture<TextbookmanageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextbookmanageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextbookmanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
