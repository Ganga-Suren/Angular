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
    { id: 0, name:"Rowan Products" }, 
    { id: 1, name: "Movies" },
    { id: 2, name: "Food Items" }, 
    { id: 3, name: "Bikes & Accessories" }
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
    this.service.changeCategoryId(this.selectedCategoryId);
  }

  onHome(): void {
    this.service.setShowCategory(true);
  }

  onProfile(): void {
    this.service.setShowCategory(false);
  }

  signOut(): void {
    this.router.navigate(["/login"]);
    this.showMessage("Signed out successfully");
  }
}
