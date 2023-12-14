import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://localhost:7090/api'; // Replace with your API base URL
  //private categoryId: any;
  wishlistItems: any[] = [];
  currentCustomer: any;
  constructor(private http: HttpClient) {}

  private cartItems: any[] = [];
  private showCategory: boolean = true;
  private categoryIdSource = new BehaviorSubject<string>('defaultCategoryId');
  currentCategoryId = this.categoryIdSource.asObservable();

  setCurrentCustomer(customer: any): void {
    this.currentCustomer = customer;
  }

  getCurrentCustomer(): void {
    return this.currentCustomer;
  }

  getShowCategory(): boolean {
    return this.showCategory;
  }

  setShowCategory(value: boolean): void {
    this.showCategory = value;
  }

  changeCategoryId(categoryId: string) {
    this.categoryIdSource.next(categoryId);
  }

  //signup methods
  signUp(data: any): Observable<any> {
  const url = `${this.apiUrl}/Customers`;
  return this.http.post<any>(url, data);
  }

  editProfile(data: any): Observable<any> {
    const url = `${this.apiUrl}/Customers/${data.customerId}`;
    return this.http.put<any>(url, data);
    }

  // Customer-related methods

  getCustomers(): Observable<any[]> {
    const url = `${this.apiUrl}/Customers`;
    return this.http.get<any[]>(url);
  }

  deleteCustomer(customerId: number): Observable<any> {
    const url = `${this.apiUrl}/Customers/${customerId}`;
    return this.http.delete<any>(url);
  }

  addCustomer(data: any): Observable<any> {
    const url = `${this.apiUrl}/Customers`;
    return this.http.post<any>(url, data);
  }
  
  // partner-relatedmethods
  
  getPartners(): Observable<any[]> {
    const url = `${this.apiUrl}/Partners`;
    return this.http.get<any[]>(url);
  }

  deletePartner(partnerId: number): Observable<any> {
    const url = `${this.apiUrl}/Partners/${partnerId}`;
    return this.http.delete<any>(url);
  }

  addPartner(data: any): Observable<any> {
    const url = `${this.apiUrl}/Partners`;
    return this.http.post<any>(url, data);
  }
  
 // Product-related methods

  getProducts(): Observable<any[]> {
    const url = `${this.apiUrl}/Products`;
    return this.http.get<any[]>(url);
  }

  getAWProducts(): Observable<any[]> {
    const url = `${this.apiUrl}/AdvWorks`;
    return this.http.get<any[]>(url);
  }

  getSakilaProducts(): Observable<any[]> {
    const url = `${this.apiUrl}/Sakila/product`;
    return this.http.get<any[]>(url);
  }

  getNWProducts(): Observable<any[]> {
    const url = `${this.apiUrl}/NorthWind/products`;
    return this.http.get<any[]>(url);
  }

  //cart related methods
  getCartItems(id: any): Observable<any> {
    const url = `${this.apiUrl}/Carts/${id}`;
    return this.http.get<any[]>(url);
  }

  addToCart(data: any, id: any): Observable<any> {
    const url = `${this.apiUrl}/Carts/${id}`;
    return this.http.post<any>(url, data);
  }

  deleteCartitem(id: any): Observable<any> {
    const url = `${this.apiUrl}/Carts/deleteCartItem/${id}`;
    return this.http.delete<any>(url);
  }

  emptyCart(id: any): Observable<any> {
    const url = `${this.apiUrl}/Carts/deleteAllCartItems/${id}`;
    return this.http.delete<any>(url);
  }

  //wishlist related methods
  addToWishlist(data: any, id: any): Observable<any> {
    const url = `${this.apiUrl}/Wishlists/${id}/${data.productName}`;
    return this.http.post<any>(url, data);
  }

  getWishListItems(id: any): Observable<any> {
    const url = `${this.apiUrl}/Wishlists/${id}`;
    return this.http.get<any[]>(url);
  }

  deleteWishlistItem(wishlistId: any): Observable<any> {
    const url = `${this.apiUrl}/Wishlists/deleteWishItem/${wishlistId}`;
    return this.http.delete<any>(url);
  }

  emptyWishlist(customerId: any): Observable<any> {
    const url = `${this.apiUrl}/Wishlists/deleteAllWishItems/${customerId}`;
    return this.http.delete<any>(url);
  }

}
