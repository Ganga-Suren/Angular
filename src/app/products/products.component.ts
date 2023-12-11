import { Component, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '.././api.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  categoryId: any;
  products: any;
  customer: any;

  constructor(private route: ActivatedRoute, private router: Router, private service: ApiService, private snackBar: MatSnackBar) {}
  
  ngOnInit(): void {
    this.products = [];
    this.categoryId = 0;
    this.service.currentCategoryId.subscribe(categoryId => {
      this.categoryId = categoryId;
      this.changeProductsByCategory();
    });
    this.customer = this.service.getCurrentCustomer();
  }

  
  loadProducts(url?: any): void {
    url.subscribe({
      next: (data:any) => (this.products = data),
      error: (error:any) => (console.error('Error loading customers:', error)),
      complete: () => console.log('Complete')
    });
  }

  changeProductsByCategory(): void {
    if(this.categoryId == 1) { this.loadProducts(this.service.getSakilaProducts()) }
    else if(this.categoryId == 2) { this.loadProducts(this.service.getNWProducts()) }
    else if(this.categoryId == 3) { this.loadProducts(this.service.getAWProducts()) }
    else { this.loadProducts(this.service.getProducts()) }
   }
  
  viewProductDetails(productId: number) {
    this.router.navigate(['/product-details', productId]);
  }

  addToCart(product: any) {
    let data;
    if(this.categoryId == 1) {
      data = { 
        "productName": product.title,
        "quantity": 1,
        "price": Math.round(product.replacementCost)
      }
    } else if(this.categoryId == 2) {
      data = { 
        "productName": product.productName,
        "quantity": 1,
        "price": Math.round(product.standardCost)
      }
    } else if(this.categoryId == 3) {
      data = { 
        "productName": product.name,
        "quantity": 1,
        "price": Math.round(product.standardCost)
      }
    } else {
      data = { 
        "productName": product.productName,
        "quantity": 1,
        "price": Math.round(product.standardCost)
      }
    }

    this.service.addToCart(data, this.customer.customerId).subscribe(response => {
      console.log('API response:', response);
    }, error => {
      console.error('Error submitting form:', error);
    });
    this.showNotification('Product added to CART successfully');
  }

  
  addToWishlist(product: any) {
    let data;
    if(this.categoryId == 1) {
      data = { 
        "productName": product.title,
        "quantity": 1,
        "price": Math.round(product.replacementCost)
      }
    } else if(this.categoryId == 2) {
      data = { 
        "productName": product.productName,
        "quantity": 1,
        "price": Math.round(product.standardCost)
      }
    } else if(this.categoryId == 3) {
      data = { 
        "productName": product.name,
        "quantity": 1,
        "price": Math.round(product.standardCost)
      }
    } else {
      data = { 
        "productName": product.productName,
        "quantity": 1,
        "price": Math.round(product.standardCost)
      }
    }

    this.service.addToWishlist(data, this.customer.customerId).subscribe(response => {
      console.log('API response:', response);
    }, error => {
      console.error('Error submitting form:', error);
    });
    this.showNotification('Product added to WISHLIST successfully');
  }

  private showNotification(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000, // 3 seconds
    });
  }
}
