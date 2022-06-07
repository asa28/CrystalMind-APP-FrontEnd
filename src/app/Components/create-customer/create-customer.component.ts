import { Component } from '@angular/core';
import { CustomerServiceService } from 'src/app/Services/customer-service.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})


export class CreateCustomerComponent {

  constructor(private service: CustomerServiceService) {
  }

  GenderList: any = ['M', 'F'];
  isCustomerAddressAvaliable: boolean = false;
  createdId: any;

  createCustomer(f: any) {
    console.log(f.value);

    this.service.postCustomer(f.value).subscribe(response => {
      console.log(response);
      this.isCustomerAddressAvaliable = true;
      this.createdId = response.hasOwnProperty('id');
      console.log(this.createdId);
    }, error => {
      console.log(error);
      this.isCustomerAddressAvaliable = false;
    });
  }

}
