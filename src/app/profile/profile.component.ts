import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  profileForm!: FormGroup;
  customer: any;

  constructor(private snackBar: MatSnackBar, private service: ApiService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.customer = this.service.getCurrentCustomer();
    console.log(this.customer)
    this.service.setShowCategory(false);
    // Initialize the form with customer data
    this.profileForm = this.fb.group({
      customerId: [this.customer.customerId],
      firstName: [this.customer.firstName, Validators.required],
      lastName: [this.customer.lastName, Validators.required],
      mobilePhone: [this.customer.mobilePhone, Validators.required],
      email: [this.customer.email, [Validators.required, Validators.email]],
      address: [this.customer.address, Validators.required],
      city: [this.customer.city, Validators.required],
      stateProvince: [this.customer.stateProvince, Validators.required],
      zipPostalCode: [this.customer.zipPostalCode, Validators.required],
      countryRegion: [this.customer.countryRegion, Validators.required]
    });
  }

  private showNotification(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000, // 3 seconds
    });
  }


  
  get f() {
    return this.profileForm.controls;
  }

  saveChanges(event: Event) {
    event.preventDefault();
    if (this.profileForm.valid) {
      const formData = this.profileForm.value;
      this.service.editProfile(formData).subscribe(response => {
        console.log('API response:', response);
      }, error => {
        console.error('Error submitting form:', error);
      });
      console.log('Sign up Form data:', formData);
      this.showNotification('Successfully saved the changes.');
    } else {
      // Form is invalid, handle accordingly
      console.log('sign up Form is invalid');
    }
  }
}