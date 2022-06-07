import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCustomerAddressComponent } from './view-customer-address.component';

describe('ViewCustomerAddressComponent', () => {
  let component: ViewCustomerAddressComponent;
  let fixture: ComponentFixture<ViewCustomerAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCustomerAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCustomerAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
