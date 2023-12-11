import { Component, OnInit } from '@angular/core';
import { ApiService } from '.././api.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cartItems: any;
  shouldScroll: boolean = false;
  customer: any;

  ngOnInit() {
    this.customer = this.service.getCurrentCustomer();
    this.service.setShowCategory(false);
    this.loadCartitems();
  }
  constructor(private router: Router, private service: ApiService, private snackBar: MatSnackBar) {
  }

  loadCartitems(): void {
    this.service.getCartItems(this.customer.customerId).subscribe({
      next: (data) => (this.cartItems = data),
      error: (error) => (console.error('Error loading cart items:', error)),
      complete: () => console.log('Complete')
    });
  }

  confirmPayment(): void {
    this.router.navigate(['/home/payment'])
  }

  clearCart(): void {
    this.service.emptyCart(this.customer.customerId).subscribe();
  }

  removeFromCart(productId: number): void {
    this.service.deleteCartitem(productId).subscribe();
    this.showNotification('Product removed from cart successfully');
  }

  private showNotification(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000, // 3 seconds
    });
  }

  getTotalPrice(): any {
    // let total= 0;
    // this.cartItems.forEach(item => total = total+ item.price);
    // return total;
  }

}
