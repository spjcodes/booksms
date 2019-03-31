import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailcarouselComponent } from './detailcarousel.component';

describe('DetailcarouselComponent', () => {
  let component: DetailcarouselComponent;
  let fixture: ComponentFixture<DetailcarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailcarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailcarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
