import { Customer } from 'src/app/Interfaces/Customer';
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';


@Injectable({
  providedIn: 'root'
})


export class CustomerServiceService {

  private mainURL: string = "https://localhost:44370/api/Customer/";
  private getAllUrl: string = "list-All-Customers";
  private getCustomerByIdUrl: string = "view-Customer/";
  private postCustomerUrl: string = "add-Customer";
  private updateCustomerUrl: string = "edit-Customer/";
  private deleteCustomerUrl: string = "remove-Customer/";

  constructor(private http: HttpClient) {
  }

  getAllUsers() {
    return this.http.get(this.mainURL + this.getAllUrl);
  }

  getCustomerById(id: string) {
    return this.http.get(this.mainURL + this.getCustomerByIdUrl + id);
  }

  postCustomer(customerModel: Customer) {
    return this.http.post(this.mainURL + this.postCustomerUrl, customerModel);
  }

  editCustomer(customerModel: Customer) {
    return this.http.put(this.mainURL + this.updateCustomerUrl, customerModel);
  }

  removeCustomer(id: string) {
    return this.http.delete(this.mainURL + this.deleteCustomerUrl + id);
  }

}
