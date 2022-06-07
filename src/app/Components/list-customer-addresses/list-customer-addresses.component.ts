import { CustomerAddress } from 'src/app/Interfaces/CustomerAddress';
import { Component, OnInit } from '@angular/core';
import { CustomerAddressService } from 'src/app/Services/customer-address.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-customer-addresses',
  templateUrl: './list-customer-addresses.component.html',
  styleUrls: ['./list-customer-addresses.component.css']
})


export class ListCustomerAddressesComponent implements OnInit {

  constructor(private http: HttpClient, private service: CustomerAddressService) { }

  ngOnInit(): void {
    this.getcustomerAddresses();
  }

  customerId: string = "f138a31e-3c81-481e-92de-d873d020b4d4";
  mainURL: string = "https://localhost:44370/api/CustomerAddress/";
  getAllAddressByCustomerId: string = "list-all-customer-addresses-by-customer-id/";
  AddressList: any;

  getcustomerAddresses(): any {
    return this.http.get(this.mainURL + this.getAllAddressByCustomerId + this.customerId).subscribe(response => {
      this.AddressList = response;
      console.log(response);
    }, error => { console.log(error); });
  }
}
