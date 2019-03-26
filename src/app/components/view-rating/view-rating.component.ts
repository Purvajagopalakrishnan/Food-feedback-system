import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ViewRatingService } from 'src/app/services/view-rating.service';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-view-rating',
  templateUrl: './view-rating.component.html',
  styleUrls: ['./view-rating.component.css']
})
export class ViewRatingComponent implements OnInit {
  pageTitle = 'Food Feedback system';
  submitted = false;
  averageRating: any;
  viewratingForm: FormGroup;
  showMessage = false;
  showTitle: boolean;
  get viewratingform() {
    return this.viewratingForm.controls;
  }

  constructor(private viewratingservice:ViewRatingService, private router:Router, private formBuilder:FormBuilder, private localstroageservice: LocalStorageService) { }

  ngOnInit() {
    this.hideNonAdminContent();
    this.viewratingForm = this.formBuilder.group({
      date: ['',Validators.required],
      type_of_meal: ['',Validators.required],
    });
  }
  OnSubmit() {
    this.submitted = true;
    this.viewratingservice.ViewRating(this.viewratingform.date.value,this.viewratingform.type_of_meal.value)
    .subscribe(
      Average_rating => {
        this.averageRating = Average_rating;
        this.showMessage = true;
      },
      error => {
        alert("Record Not found");
      }
    );
  }
  OnLogout() {
    this.localstroageservice.removeItem('isAdmin');
    this.router.navigate(['/login']);
    this.localstroageservice.removeItem('Email_id');
    this.localstroageservice.removeItem('token');
  }
  hideNonAdminContent(): void {
    const isAdminValue: string = this.localstroageservice.RetrieveItem('isAdmin');
    if(isAdminValue === "true") {
      this.showTitle = true;
    } else {
      this.showTitle = false;
    }
  }
}
