import { CustomerAddress } from 'src/app/Interfaces/CustomerAddress';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerAddressService {

  constructor(private http: HttpClient) {
  }


  private mainURL: string = "https://localhost:44370/api/CustomerAddress/";
  private getAllAddressByCustomerIdUrl: string = "list-all-customer-addresses-by-customer-id/";
  private viewCustomerAddressByIdUrl: string = "view-customer-address/";
  private postCustomerAddressUrl: string = "add-Customer-address";
  private updateCustomerAddressUrl: string = "edit-customer-address";
  private deleteCustomerAddressUrl: string = "remove-customer-address-by-id/";



  getCustomerAddressByCustomerId(customerId: string) {
    return this.http.get(this.mainURL + this.getAllAddressByCustomerIdUrl + customerId);
  }

  getCustomerAddress(id: string) {
    return this.http.get(this.mainURL + this.viewCustomerAddressByIdUrl + id)
  }

  postCustomerAddress(customerAddressModel: CustomerAddress) {
    return this.http.post(this.mainURL + this.postCustomerAddressUrl, customerAddressModel);
  }

  editCustomerAddress(customerAddressModel: CustomerAddress) {
    return this.http.put(this.mainURL + this.updateCustomerAddressUrl, customerAddressModel);
  }

  removeCustomerAddress(id: string) {
    return this.http.delete(this.mainURL + this.deleteCustomerAddressUrl + id);
  }
}
