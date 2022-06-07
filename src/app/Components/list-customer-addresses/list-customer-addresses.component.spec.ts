import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCustomerAddressesComponent } from './list-customer-addresses.component';

describe('ListCustomerAddressesComponent', () => {
  let component: ListCustomerAddressesComponent;
  let fixture: ComponentFixture<ListCustomerAddressesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCustomerAddressesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCustomerAddressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
