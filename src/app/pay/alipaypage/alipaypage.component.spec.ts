import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlipaypageComponent } from './alipaypage.component';

describe('AlipaypageComponent', () => {
  let component: AlipaypageComponent;
  let fixture: ComponentFixture<AlipaypageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlipaypageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlipaypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
