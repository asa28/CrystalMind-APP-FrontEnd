import { CustomerAddress } from 'src/app/Interfaces/CustomerAddress';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerAddressService } from 'src/app/Services/customer-address.service';

@Component({
  selector: 'app-create-customer-address',
  templateUrl: './create-customer-address.component.html',
  styleUrls: ['./create-customer-address.component.css']
})


export class CreateCustomerAddressComponent implements OnInit {

  createdId: any;
  fakeCustomerId: string = "3FA85F64-5717-4562-B3FC-2C963F66AFA6";
  routedId: any;

  customerAddressModel: any = {
    customerId: '3FA85F64-5717-4562-B3FC-2C963F66AFA6',
    address: '',
    addressRank: 0
  };

  constructor(private route: ActivatedRoute, private service: CustomerAddressService) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.routedId = params.get('id');
      console.log(this.routedId);
    });

    this.customerAddressModel.customerId = this.routedId;
  }

  createCustomerAddress(f: any) {
    console.log(f.value);

    this.customerAddressModel.address = f.value['address'];
    this.customerAddressModel.addressRank = f.value['rank'];

    console.log(this.customerAddressModel);

    this.service.postCustomerAddress(this.customerAddressModel).subscribe(response => {
      console.log(response);
      this.createdId = response.hasOwnProperty('id');
      console.log("this is the created Id");
      console.log(this.createdId);
    }, error => {
      console.log(error);
    });
  }

}
