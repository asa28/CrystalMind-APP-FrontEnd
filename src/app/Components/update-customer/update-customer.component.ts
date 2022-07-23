import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from 'src/app/Services/customer-service.service';
import { ActivatedRoute } from '@angular/router';
import { CustomerAddressService } from 'src/app/Services/customer-address.service';
import { Location } from '@angular/common';
import { Observable, tap } from 'rxjs';
import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})


export class UpdateCustomerComponent implements OnInit {


  GenderList: any = ['M', 'F'];
  isCustomerAddressAvaliable: boolean = false;
  isCustomerAvaliable: boolean = false;
  routedId: any;
  AddressList: any;
  customerModel: any;

  constructor(private location: Location,
    private route: ActivatedRoute,
    private customerAddressservice: CustomerAddressService,
    private customerservice: CustomerServiceService) {
  }

  // initializeAppFactory(httpClient: HttpClient): () => Observable<any> {
  //   return () => httpClient.get("https://someUrl.com/api/user")
  //     .pipe(
  //        tap(user => { ... })
  //     );
  //  }

  ngOnInit(): void {
    this.getId();
    this.getCustomer();
    this.getCustomerAddress();
  }

  getId() {
    this.route.paramMap.subscribe(params => {
      this.routedId = params.get('id');
      console.log("routedId:  >> (" + this.routedId + ") <<");
    });
  }

  getCustomer() {
    this.customerservice.getCustomerById(this.routedId).subscribe(response => {
      console.log("Please Notice that this response of CustomerService to get customer model:");
      console.log(response);
      this.customerModel = response;
      this.isCustomerAvaliable = true;
    }, error => {
      console.log(error);
    });
  }

  getCustomerAddress() {
    this.customerAddressservice.getCustomerAddressByCustomerId(this.routedId).subscribe(response => {
      console.log("Please Notice that this response of CustomerAddressService to get customerAddress model:");
      console.log(response);
      this.AddressList = response;
      this.isCustomerAddressAvaliable = this.AddressList ? true : false;
    }, error => {
      console.log(error);
    });
  }


  updateCustomer(f: any) {

    console.log(f.value);

    this.customerservice.editCustomer(f.value).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });
  }

  // initializeAppFactory(httpClient: HttpClient): () => Observable<any> {
  //   return () => httpClient.get("https://someUrl.com/api/user")
  //     .pipe(
  //        tap(user => { ... })
  //     );
  //  }

}
