import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingaddComponent } from './billingadd.component';

describe('BillingaddComponent', () => {
  let component: BillingaddComponent;
  let fixture: ComponentFixture<BillingaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
