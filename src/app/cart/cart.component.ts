import { Component } from '@angular/core';
import { ApiService } from '.././api.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems: any[] = [];
  shouldScroll: boolean = false;

  ngOnInit() {
    this.service.setShowCategory(false);
    this.shouldScroll = this.cartItems.length > 5; // Change the condition as needed
  }
  constructor(private router: Router, private service: ApiService, private snackBar: MatSnackBar) {
    this.cartItems = this.service.getCartItems();
  }

  confirmPayment(): void {
    this.router.navigate(['/home/payment'])
  }

  clearCart(): void {
    this.cartItems = [];
    this.service.emptyCart();
  }

  removeFromCart(productId: number): void {
    let index = this.cartItems.findIndex(item => item.id = productId)
    this.cartItems.splice(index, 1)[0];
    this.showNotification('Product removed from cart successfully');
  }

  private showNotification(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000, // 3 seconds
    });
  }

  getTotalPrice(): any {
    let total= 0;
    this.cartItems.forEach(item => total = total+ item.price);
    return total;
  }

}
