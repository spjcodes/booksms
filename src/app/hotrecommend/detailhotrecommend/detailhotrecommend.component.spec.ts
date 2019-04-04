import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailhotrecommendComponent } from './detailhotrecommend.component';

describe('DetailhotrecommendComponent', () => {
  let component: DetailhotrecommendComponent;
  let fixture: ComponentFixture<DetailhotrecommendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailhotrecommendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailhotrecommendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
