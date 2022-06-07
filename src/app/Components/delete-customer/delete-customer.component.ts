import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerServiceService } from 'src/app/Services/customer-service.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})


export class DeleteCustomerComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private http: HttpClient,
    private service: CustomerServiceService,
    private location: Location) {
  }

  routedId: any;


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.routedId = params.get('id');
      console.log(this.routedId);
    });
  }

  removeCustomer(id: any) {
    this.service.removeCustomer(id).subscribe(response => {
      console.log(response);
    });
  }


  cancel() {
    this.location.back();
  }


}
