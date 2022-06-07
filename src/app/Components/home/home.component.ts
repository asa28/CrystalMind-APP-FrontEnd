import { Component, OnInit, Input } from '@angular/core';
import { CustomerServiceService } from './../../Services/customer-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  customersList: any;

  constructor(private service: CustomerServiceService) {
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.service.getAllUsers().subscribe(response => {
      this.customersList = response;
      console.log(response);
    }, error => {
      console.log(error);
    });
  }
}
