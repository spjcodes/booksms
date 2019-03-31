import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselmanageComponent } from './carouselmanage.component';

describe('CarouselmanageComponent', () => {
  let component: CarouselmanageComponent;
  let fixture: ComponentFixture<CarouselmanageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselmanageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselmanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
