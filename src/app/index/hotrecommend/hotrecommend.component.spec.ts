import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotrecommendComponent } from './hotrecommend.component';

describe('HotrecommendComponent', () => {
  let component: HotrecommendComponent;
  let fixture: ComponentFixture<HotrecommendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotrecommendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotrecommendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
