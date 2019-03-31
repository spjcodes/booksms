import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotrecommendmanageComponent } from './hotrecommendmanage.component';

describe('HotrecommendmanageComponent', () => {
  let component: HotrecommendmanageComponent;
  let fixture: ComponentFixture<HotrecommendmanageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotrecommendmanageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotrecommendmanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
