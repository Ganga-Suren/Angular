import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-partner-edit-dialog',
  templateUrl: './partner-edit-dialog.component.html',
  styleUrl: './partner-edit-dialog.component.css'
})
export class PartnerEditDialogComponent {
  profileForm!: FormGroup;
  customer: any;
  newProfileForm!: FormGroup;
  
  constructor(
    private service: ApiService,
    private dialogRef: MatDialogRef<PartnerEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { customer:any, isEditMode: boolean },
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
    this.service.setShowCategory(false);
    this.profileForm = this.fb.group({
      firstName: [this.data.customer.firstName, Validators.required],
      lastName: [this.data.customer.lastName, Validators.required]
    });

    this.newProfileForm = this.fb.group({
      customerId: [0],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobilePhone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      city: ['', Validators.required],
      stateProvince: ['', Validators.required],
      zipPostalCode: ['', Validators.required],
      countryRegion: ['', Validators.required],
      customerName: [''],
      passwordHash: ['']
    });

  }

  get f() {
    return this.profileForm.controls;
  }

  get newF() {
    return this.newProfileForm.controls;
  }

  saveChanges(event: Event) {
    const editedData = { ...this.data, ...this.profileForm.value };
    this.dialogRef.close(editedData);
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

  OnAdd(event: Event) {
    let addedData = { ...this.data, ...this.newProfileForm.value };
    addedData.customerName = this.newProfileForm.value.firstName;
    addedData.passwordHash = "123456";
    this.dialogRef.close(addedData);
    if (this.newProfileForm.valid) {
      const formData = addedData;
      this.service.addCustomer(formData).subscribe(response => {
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

  private showNotification(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000, // 3 seconds
    });
  }
}
