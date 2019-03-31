import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcarouselComponent } from './editcarousel.component';

describe('EditcarouselComponent', () => {
  let component: EditcarouselComponent;
  let fixture: ComponentFixture<EditcarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditcarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
