import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeductCreditComponent } from './deduct-credit.component';

describe('DeductCreditComponent', () => {
  let component: DeductCreditComponent;
  let fixture: ComponentFixture<DeductCreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeductCreditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeductCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
