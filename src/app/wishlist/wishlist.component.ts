import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent {
  wishlistItems: any[] = [];
  shouldScroll: boolean = false;
  categoryId: any;
  customer: any;

  ngOnInit() {
    this.service.setShowCategory(false);
    this.service.currentCategoryId.subscribe(categoryId => {
      this.categoryId = categoryId;
    });
    this.customer = this.service.getCurrentCustomer();
  }
  constructor(private router: Router, private service: ApiService, private snackBar: MatSnackBar) {
    // this.wishlistItems = this.service.getWishlistItems();
    this.wishlistItems = [];
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


  clearWishlist(): void {
    // this.wishlistItems = [];
    // this.service.emptyWishlist();
  }

  removeFromWishlist(productId: number): void {
    // let index = this.wishlistItems.findIndex(item => item.id = productId)
    // this.wishlistItems.splice(index, 1)[0];
    // this.showNotification('Product removed from wishlist successfully');
  }

  private showNotification(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000, // 3 seconds
    });
  }

  getTotalPrice(): any {
    // let total= 0;
    // this.wishlistItems.forEach(item => total = total+ item.price);
    // return total;
  }

}
