import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '.././api.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  constructor(private route: ActivatedRoute, private router: Router, private service: ApiService, private snackBar: MatSnackBar) {}

  products: any[] = [
    {id:1, src: "/assets/motorola.jpg", alt: "motorola phone", heading: "MOTOROLA", price: 10, description: "The Phone that owns the world" },
    {id:2, src: "assets/apple.jpg", alt: "apple phone", heading: "APPLE", price: 20, description: "The Phone that owns the PHONE world" },
    {id:3, src: "assets/nothing.jpg", alt: "Nothing phone", heading: "Nothing Phone 1", price: 300, description: "The Phone that's changing the PHONE world" },
    {id:4, src: "/assets/motorola.jpg", alt: "motorola phone", heading: "MOTOROLA", price: 10, description: "The Phone that owns the world" },
    {id:5, src: "assets/apple.jpg", alt: "apple phone", heading: "APPLE", price: 20, description: "The Phone that owns the PHONE world" },
    {id:6, src: "assets/nothing.jpg", alt: "Nothing phone", heading: "Nothing Phone 1", price: 30, description: "The Phone that's changing the PHONE world" },
    {id:7, src: "/assets/motorola.jpg", alt: "motorola phone", heading: "MOTOROLA", price: 10, description: "The Phone that owns the world" },
    {id:8, src: "assets/apple.jpg", alt: "apple phone", heading: "APPLE", price: 20, description: "The Phone that owns the PHONE world" },
    {id:9, src: "assets/nothing.jpg", alt: "Nothing phone", heading: "Nothing Phone 1", price: 30, description: "The Phone that's changing the PHONE world" },
    {id:10, src: "/assets/motorola.jpg", alt: "motorola phone", heading: "MOTOROLA", price: 10, description: "The Phone that owns the world" },
    {id:11, src: "assets/apple.jpg", alt: "apple phone", heading: "APPLE", price: 20, description: "The Phone that owns the PHONE world" },
    {id:12, src: "assets/nothing.jpg", alt: "Nothing phone", heading: "Nothing Phone 1", price: 30, description: "The Phone that's changing the PHONE world" },
    {id:13, src: "assets/apple.jpg", alt: "apple phone", heading: "APPLE", price: 20, description: "The Phone that owns the PHONE world" },
    {id:14, src: "assets/nothing.jpg", alt: "Nothing phone", heading: "Nothing Phone 1", price: 30, description: "The Phone that's changing the PHONE world" },
    {id:15, src: "/assets/motorola.jpg", alt: "motorola phone", heading: "MOTOROLA", price: 10, description: "The Phone that owns the world" },
    {id:16, src: "assets/apple.jpg", alt: "apple phone", heading: "APPLE", price: 20, description: "The Phone that owns the PHONE world" },
    {id:17, src: "assets/nothing.jpg", alt: "Nothing phone", heading: "Nothing Phone 1", price: 30, description: "The Phone that's changing the PHONE world" },
    {id:18, src: "/assets/motorola.jpg", alt: "motorola phone", heading: "MOTOROLA", price: 10, description: "The Phone that owns the world" },
    {id:19, src: "assets/apple.jpg", alt: "apple phone", heading: "APPLE", price: 20, description: "The Phone that owns the PHONE world" },
    {id:20, src: "assets/nothing.jpg", alt: "Nothing phone", heading: "Nothing Phone 1", price: 30, description: "The Phone that's changing the PHONE world" }
  ]
  
  ngOnInit() {
    this.service.getCategoryId();
  }
  
  viewProductDetails(productId: number) {
    this.router.navigate(['/product-details', productId]);
  }

  addToCart(product: any) {
    this.service.addToCart(product);
    this.showNotification('Product added to CART successfully');
  }

  addToWishlist(product: any) {
    this.service.addToWishlist(product);
    this.showNotification('Product added to WISHLIST successfully');
  }

  private showNotification(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000, // 3 seconds
    });
  }
}
