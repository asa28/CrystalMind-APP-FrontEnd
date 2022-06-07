import { summaryPipe } from './Pipes/summary.pipe';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UpdateCustomerComponent } from './Components/update-customer/update-customer.component';
import { DeleteCustomerComponent } from './Components/delete-customer/delete-customer.component';
import { CreateCustomerComponent } from './Components/create-customer/create-customer.component';
import { HomeComponent } from './Components/home/home.component';
import { ViewCustomerComponent } from './Components/view-customer/view-customer.component';
import { ViewCustomerAddressComponent } from './Components/view-customer-address/view-customer-address.component';
import { ListCustomerAddressesComponent } from './Components/list-customer-addresses/list-customer-addresses.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { CreateCustomerAddressComponent } from './Components/create-customer-address/create-customer-address.component';

@NgModule({
  declarations: [
    AppComponent,
    UpdateCustomerComponent,
    DeleteCustomerComponent,
    CreateCustomerComponent,
    HomeComponent,
    summaryPipe,
    ViewCustomerComponent,
    ViewCustomerAddressComponent,
    ListCustomerAddressesComponent,
    NotFoundComponent,
    CreateCustomerAddressComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'createCustomerAddress/:id', component: CreateCustomerAddressComponent },
      { path: 'createCustomer', component: CreateCustomerComponent },
      { path: 'viewCustomer/:id', component: ViewCustomerComponent },
      { path: 'updateCustomer/:id', component: UpdateCustomerComponent },
      { path: 'deleteCustomer/:id', component: DeleteCustomerComponent },


      { path: '**', component: NotFoundComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
