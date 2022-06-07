import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { CustomerAddressService } from 'src/app/Services/customer-address.service';
import { Location } from '@angular/common'


@Component({
  selector: 'app-view-customer-address',
  templateUrl: './view-customer-address.component.html',
  styleUrls: ['./view-customer-address.component.css']
})
export class ViewCustomerAddressComponent {

  routedId: any;
  AddressList: any;

  constructor(private location: Location, private route: ActivatedRoute, private service: CustomerAddressService) {
  }

  getAllAddressesbyCustomerId() {

    this.route.paramMap.subscribe(params => {
      this.routedId = params.get('id');
      console.log(this.routedId);
    });

    this.service.getCustomerAddressByCustomerId(this.routedId).subscribe(response => {
      console.log(response);
      this.AddressList = response;
    }, error => {
      console.log(error);
    });
  }

  cancel() {
    this.location.back();
  }

}

