import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovelbooksComponent } from './novelbooks.component';

describe('NovelbooksComponent', () => {
  let component: NovelbooksComponent;
  let fixture: ComponentFixture<NovelbooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovelbooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovelbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
