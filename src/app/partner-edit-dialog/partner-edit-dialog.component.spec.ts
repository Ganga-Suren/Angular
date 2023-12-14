import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerEditDialogComponent } from './partner-edit-dialog.component';

describe('PartnerEditDialogComponent', () => {
  let component: PartnerEditDialogComponent;
  let fixture: ComponentFixture<PartnerEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartnerEditDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PartnerEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
