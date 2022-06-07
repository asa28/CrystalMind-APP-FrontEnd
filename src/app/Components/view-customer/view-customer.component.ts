import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from './../../Services/customer-service.service';
import { Customer } from 'src/app/Interfaces/Customer';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent implements OnInit {

  title = 'CustomerComponent';

  routedId: any;

  customerEntity: Customer = {
    id: '',
    firstName: '',
    lastName: '',
    gender: '',
    email: '',
    dateOfBirth: new Date()
  };

  constructor(private route: ActivatedRoute, private http: HttpClient, private service: CustomerServiceService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.routedId = params.get('id');
      console.log(this.routedId);
    });

    this.getCustomer(this.routedId);
  }



  getCustomer(id: any) {
    this.service.getCustomerById(id).subscribe(response => {
      console.log(response);
    });
  }


}
