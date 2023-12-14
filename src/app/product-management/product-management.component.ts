// product-management.component.ts
import { Component, OnInit } from '@angular/core';
import { ApiService } from '..//api.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.css']
})
export class ProductManagementComponent implements OnInit {
  partners: any[] = [];
  newProduct: any = {};
  selectedProduct: any = {};
  isEditing: boolean = false;
  displayedColumns: string[] = ['partnerId', 'partnerName','description', 'actions'];
  constructor(private router: Router, private apiService: ApiService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadPartners();
  }

  loadPartners(): void {
    this.apiService.getPartners().subscribe({
      next: (data) => (this.partners = data),
      error: (error) => (console.error('Error loading Partners:', error)),
      complete: () => console.log('Complete')
    });
  }

  onAdd(): void {
    this.isEditing = false;
    //this.openEditDialog("", this.isEditing)
  }
  
  onEdit(customer: any): void {
    this.isEditing = true;
   // this.openEditDialog(customer, this.isEditing);
  }

  onDelete(partner: any) {
    this.apiService.deletePartner(partner.partnerId).subscribe();
  }

  // openEditDialog(customer: any, isEditMode: boolean): void {
  //   const dialogRef = this.dialog.open(CustomerEditDialogComponent, {
  //     width: '826px',
  //     data: { customer, isEditMode }
  //   });
  
  //   dialogRef.afterClosed().subscribe((result: any) => {
  //     if (result) {
  //       console.log(result);
  //     }
  //   });
  // }

  // openDeleteConfirmationDialog(customer: any): void {
  //   const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent, {
  //     width: '400px',
  //     height: '200px',
  //     data: { customer }
  //   });
  
  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result) {
  //       this.apiService.deleteCustomer(customer.customerId).subscribe();
  //     }
  //   });
  // }
}