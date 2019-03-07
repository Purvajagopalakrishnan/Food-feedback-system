import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ViewRatingService } from 'src/app/services/view-rating.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-rating',
  templateUrl: './view-rating.component.html',
  styleUrls: ['./view-rating.component.css']
})
export class ViewRatingComponent implements OnInit {
  pageTitle = 'Food Feedback system';
  submitted = false;
  Average_rating: any;
  viewratingForm: FormGroup;
  get viewratingform() {
    return this.viewratingForm.controls;
  }

  constructor(private viewratingservice:ViewRatingService, private router:Router, private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.viewratingForm = this.formBuilder.group({
      date: ['',Validators.required],
      type_of_meal: ['',Validators.required],
    });
  }
  OnSubmit(){
    this.submitted = true;
    this.viewratingservice.ViewRating(this.viewratingform.date.value,this.viewratingform.type_of_meal.value)
    .subscribe(
      Average_rating => {
        this.Average_rating = Average_rating;
      },
      error => {}
    );
  }
  OnLogout(){
    this.router.navigate(['/login']);
  }
}
