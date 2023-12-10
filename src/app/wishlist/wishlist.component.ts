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

  ngOnInit() {
    this.service.setShowCategory(false);
    this.shouldScroll = this.wishlistItems.length > 5; // Change the condition as needed
  }
  constructor(private router: Router, private service: ApiService, private snackBar: MatSnackBar) {
    this.wishlistItems = this.service.getWishlistItems();
  }

  addToCart(product: any) {
    this.service.addToCart(product);
    this.showNotification('Prsoduct added to CART successfully');
  }

  clearWishlist(): void {
    this.wishlistItems = [];
    this.service.emptyWishlist();
  }

  removeFromWishlist(productId: number): void {
    let index = this.wishlistItems.findIndex(item => item.id = productId)
    this.wishlistItems.splice(index, 1)[0];
    this.showNotification('Product removed from wishlist successfully');
  }

  private showNotification(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000, // 3 seconds
    });
  }

  getTotalPrice(): any {
    let total= 0;
    this.wishlistItems.forEach(item => total = total+ item.price);
    return total;
  }

}
