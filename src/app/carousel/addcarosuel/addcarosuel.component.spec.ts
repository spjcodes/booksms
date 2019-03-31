import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcarosuelComponent } from './addcarosuel.component';

describe('AddcarosuelComponent', () => {
  let component: AddcarosuelComponent;
  let fixture: ComponentFixture<AddcarosuelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcarosuelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcarosuelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
