import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-customer-management',
  templateUrl: './customer-management.component.html',
  styleUrls: ['./customer-management.component.css']
})
export class CustomerManagementComponent implements OnInit {
  customers: any[] = [];
  newCustomer: any = {};
  selectedCustomer: any = {};
  isAdding: boolean = false;
  isEditing: boolean = false;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers(): void {
    this.apiService.getCustomers().subscribe({
      next: (data) => (this.customers = data),
      error: (error) => (console.error('Error loading customers:', error)),
      complete: () => console.log('Complete')
    });
  }

  // addCustomer(): void {
  //   this.apiService.addCustomer(this.newCustomer).subscribe(
  //     () => {
  //       this.loadCustomers();
  //       this.resetForm();
  //     },
  //     (error) => {
  //       console.error('Error adding customer:', error);
  //     }
  //   );
  // }

  // removeCustomer(customerId: number): void {
  //   this.apiService.removeCustomer(customerId).subscribe(
  //     () => {
  //       this.loadCustomers();
  //     },
  //     (error) => {
  //       console.error('Error removing customer:', error);
  //     }
  //   );
  // }

  // editCustomer(customerId: number): void {
  //   this.apiService.getCustomerById(customerId).subscribe(
  //     (customer) => {
  //       this.selectedCustomer = { ...customer };
  //       this.isEditing = true;
  //     },
  //     (error) => {
  //       console.error('Error loading customer details for editing:', error);
  //     }
  //   );
  // }

  // updateCustomer(): void {
  //   this.apiService.updateCustomer(this.selectedCustomer).subscribe(
  //     () => {
  //       this.loadCustomers();
  //       this.resetForm();
  //     },
  //     (error) => {
  //       console.error('Error updating customer:', error);
  //     }
  //   );
  // }

  // resetForm(): void {
  //   this.newCustomer = {};
  //   this.selectedCustomer = {};
  //   this.isAdding = false;
  //   this.isEditing = false;
  // }
}
