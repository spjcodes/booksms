import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagtestComponent } from './pagtest.component';

describe('PagtestComponent', () => {
  let component: PagtestComponent;
  let fixture: ComponentFixture<PagtestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagtestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
