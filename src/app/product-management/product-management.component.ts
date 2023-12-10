// product-management.component.ts
import { Component, OnInit } from '@angular/core';
import { ApiService } from '..//api.service';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.css']
})
export class ProductManagementComponent implements OnInit {
  products: any[] = [];
  newProduct: any = {};
  selectedProduct: any = {};
  isAdding: boolean = false;
  isEditing: boolean = false;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
   // this.loadProducts();
  }

  // loadProducts(): void {
  //   this.apiService.getProducts().subscribe(
  //     (data) => {
  //       this.products = data;
  //     },
  //     (error) => {
  //       console.error('Error loading products:', error);
  //     }
  //   );
  // }

  // addProduct(): void {
  //   this.apiService.addProduct(this.newProduct).subscribe(
  //     () => {
  //       this.loadProducts();
  //       this.resetForm();
  //     },
  //     (error) => {
  //       console.error('Error adding product:', error);
  //     }
  //   );
  // }

  // removeProduct(productId: number): void {
  //   this.apiService.removeProduct(productId).subscribe(
  //     () => {
  //       this.loadProducts();
  //     },
  //     (error) => {
  //       console.error('Error removing product:', error);
  //     }
  //   );
  // }

  // editProduct(productId: number): void {
  //   this.apiService.getProductById(productId).subscribe(
  //     (product) => {
  //       this.selectedProduct = { ...product };
  //       this.isEditing = true;
  //     },
  //     (error) => {
  //       console.error('Error loading product details for editing:', error);
  //     }
  //   );
  // }

  // updateProduct(): void {
  //   this.apiService.updateProduct(this.selectedProduct).subscribe(
  //     () => {
  //       this.loadProducts();
  //       this.resetForm();
  //     },
  //     (error) => {
  //       console.error('Error updating product:', error);
  //     }
  //   );
  // }

  // resetForm(): void {
  //   this.newProduct = {};
  //   this.selectedProduct = {};
  //   this.isAdding = false;
  //   this.isEditing = false;
  // }
}
