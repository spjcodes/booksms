import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddhotrecommendComponent } from './addhotrecommend.component';

describe('AddhotrecommendComponent', () => {
  let component: AddhotrecommendComponent;
  let fixture: ComponentFixture<AddhotrecommendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddhotrecommendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddhotrecommendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
