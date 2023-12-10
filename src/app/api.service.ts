import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://localhost:7090'; // Replace with your API base URL
  private categoryId: any;
  wishlistItems: any[] = [];

  constructor(private http: HttpClient) {}

  private cartItems: any[] = [];
  private showCategory: boolean = true;

  getShowCategory(): boolean {
    return this.showCategory;
  }

  setShowCategory(value: boolean): void {
    this.showCategory = value;
  }

  addToCart(product: any) {
    this.cartItems.push(product);
  }

  emptyCart() {
    this.cartItems = [];
  }

  getCartItems() {
    return this.cartItems;
  }

  addToWishlist(product: any) {
    this.wishlistItems.push(product);
  }

  getWishlistItems() {
    return this.wishlistItems;
  }

  emptyWishlist() {
    this.wishlistItems = [];
  }

  getItemsByCategory(categoryId: number): Observable<any> {
    const url = `${this.apiUrl}/items?category=${categoryId}`;
    return this.http.get(url);
  }

  setCategoryId(categoryId: number) {
    this.categoryId = categoryId;
  }

  getCategoryId() {
    return this.categoryId;
  }

  // Customer-related methods

  getCustomers(): Observable<any[]> {
    const url = `${this.apiUrl}/api/Customers`; // Replace with your actual endpoint for getting all customers
    return this.http.get<any[]>(url);
  }

//   getCustomerById(customerId: number): Observable<any> {
//     const url = `${this.apiUrl}/customers/${customerId}`; // Replace with your actual endpoint for getting a customer by ID
//     return this.http.get<any>(url);
//   }

//   addCustomer(customer: any): Observable<any> {
//     const url = `${this.apiUrl}/customers`; // Replace with your actual endpoint for adding a new customer
//     return this.http.post<any>(url, customer);
//   }

//   updateCustomer(customer: any): Observable<any> {
//     const url = `${this.apiUrl}/customers/${customer.id}`; // Replace with your actual endpoint for updating a customer
//     return this.http.put<any>(url, customer);
//   }

//   removeCustomer(customerId: number): Observable<any> {
//     const url = `${this.apiUrl}/customers/${customerId}`; // Replace with your actual endpoint for removing a customer
//     return this.http.delete<any>(url);
//   }
  
// // Product-related methods

  getProducts(): Observable<any[]> {
    const url = `${this.apiUrl}/products`; // Replace with your actual endpoint for getting all products
    return this.http.get<any[]>(url);
  }

//   getProductById(productId: number): Observable<any> {
//     const url = `${this.apiUrl}/products/${productId}`; // Replace with your actual endpoint for getting a product by ID
//     return this.http.get<any>(url);
//   }

//   addProduct(product: any): Observable<any> {
//     const url = `${this.apiUrl}/products`; // Replace with your actual endpoint for adding a new product
//     return this.http.post<any>(url, product);
//   }

//   updateProduct(product: any): Observable<any> {
//     const url = `${this.apiUrl}/products/${product.id}`; // Replace with your actual endpoint for updating a product
//     return this.http.put<any>(url, product);
//   }

//   removeProduct(productId: number): Observable<any> {
//     const url = `${this.apiUrl}/products/${productId}`; // Replace with your actual endpoint for removing a product
//     return this.http.delete<any>(url);
//   }

//   // Shopping cart-related methods

//   getShoppingCart(): Observable<any[]> {
//     const url = `${this.apiUrl}/shopping-cart`; // Replace with your actual endpoint for getting the shopping cart
//     return this.http.get<any[]>(url);
//   }

//   addToShoppingCart(product: any): Observable<any> {
//     const url = `${this.apiUrl}/shopping-cart/add`; // Replace with your actual endpoint for adding to the shopping cart
//     return this.http.post<any>(url, product);
//   }

//   removeFromShoppingCart(cartItem: any): Observable<any> {
//     const url = `${this.apiUrl}/shopping-cart/remove`; // Replace with your actual endpoint for removing from the shopping cart
//     return this.http.post<any>(url, cartItem);
//   }

//   // Order-related methods

//   placeOrder(orderItems: any[]): Observable<any> {
//     const url = `${this.apiUrl}/orders`; // Replace with your actual endpoint for placing an order
//     return this.http.post<any>(url, orderItems);
//   }
  
}
