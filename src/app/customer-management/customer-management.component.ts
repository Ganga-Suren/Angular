import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CustomerEditDialogComponent } from '../customer-edit-dialog/customer-edit-dialog.component';
import { DeleteConfirmationDialogComponent } from '../delete-confirmation-dialog/delete-confirmation-dialog.component';

@Component({
  selector: 'app-customer-management',
  templateUrl: './customer-management.component.html',
  styleUrls: ['./customer-management.component.css']
})
export class CustomerManagementComponent implements OnInit {
  customers: any[] = [];
  newCustomer: any = {};
  selectedCustomer: any = {};
  isEditing: boolean = false;
  displayedColumns: string[] = ['firstName','lastName', 'email', 'address', 'city', 'countryRegion', 'mobilePhone', 'actions'];

  constructor(private router: Router, private apiService: ApiService, private dialog: MatDialog) { }

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

  onAdd(): void {
    this.isEditing = false;
    this.openEditDialog("", this.isEditing)
  }
  
  onEdit(customer: any): void {
    this.isEditing = true;
    this.openEditDialog(customer, this.isEditing);
  }

  onDelete(customer: any) {
    this.openDeleteConfirmationDialog(customer);
  }

  openEditDialog(customer: any, isEditMode: boolean): void {
    const dialogRef = this.dialog.open(CustomerEditDialogComponent, {
      width: '826px',
      data: { customer, isEditMode }
    });
  
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        console.log(result);
      }
    });
  }

  openDeleteConfirmationDialog(customer: any): void {
    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent, {
      width: '400px',
      height: '200px',
      data: { customer }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.apiService.deleteCustomer(customer.customerId).subscribe();
      }
    });
  }
}