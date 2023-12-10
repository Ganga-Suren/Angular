import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  selectedCategoryId: any;
  products: any;
  constructor(private router: Router, private snackBar: MatSnackBar, public service: ApiService) { }

  categories: any[] = [
    { id: 0, name:"All Products" }, 
    { id: 1, name: "Movies" },
    { id: 2, name: "Books" }, 
    { id: 3, name: "Clothing" },
    { id: 4, name: "Furniture" },
  ]
  currentCategory: any;
  currentCategoryIndex = 0;

  ngOnInit() {
    this.changeCategory(0);
    this.service.setShowCategory(true);
  }

  showMessage(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000, // Adjust duration as needed
    });
  }

  changeCategory(num: number): void {
    this.currentCategoryIndex += num;

    if (this.currentCategoryIndex < 0) {
      this.currentCategoryIndex = this.categories.length - 1;
    } else if (this.currentCategoryIndex >= this.categories.length) {
      this.currentCategoryIndex = 0;
    }
    this.currentCategory = this.categories[this.currentCategoryIndex];
    this.selectedCategoryId = this.currentCategory.id;

    // this.service.getItemsByCategory(this.selectedCategoryId).subscribe((items) => {
    //   this.categories = items;
    //   console.log(items);
    // });

    this.service.setCategoryId(this.selectedCategoryId);
  }

  onCategoryChange(category: any):void {
    this.service.setCategoryId(category.id);
  }
}
