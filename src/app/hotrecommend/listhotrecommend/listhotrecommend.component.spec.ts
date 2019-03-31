import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListhotrecommendComponent } from './listhotrecommend.component';

describe('ListhotrecommendComponent', () => {
  let component: ListhotrecommendComponent;
  let fixture: ComponentFixture<ListhotrecommendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListhotrecommendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListhotrecommendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
