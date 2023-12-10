// order-placement.component.ts
import { Component, OnInit } from '@angular/core';
import { ApiService } from '..//api.service';

@Component({
  selector: 'app-order-placement',
  templateUrl: './order-placement.component.html',
  styleUrls: ['./order-placement.component.css']
})
export class OrderPlacementComponent implements OnInit {
  products: any[] = [];
  cart: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    //this.loadProducts();
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

  // addToCart(product: any): void {
  //   const cartItem = this.cart.find(item => item.id === product.id);

  //   if (cartItem) {
  //     cartItem.quantity++;
  //   } else {
  //     this.cart.push({ ...product, quantity: 1 });
  //   }
  // }

  // removeFromCart(cartItem: any): void {
  //   const index = this.cart.indexOf(cartItem);
  //   if (index !== -1) {
  //     this.cart.splice(index, 1);
  //   }
  // }

  // getTotalPrice(): number {
  //   return this.cart.reduce((total, item) => total + item.listPrice * item.quantity, 0);
  // }

  // checkout(): void {
  //   // Implement checkout logic, e.g., sending order to the server
  //   console.log('Order placed:', this.cart);
  //   // Clear the cart after placing the order
  //   this.cart = [];
  // }
}
