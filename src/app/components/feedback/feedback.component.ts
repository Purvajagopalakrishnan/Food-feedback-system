import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeedbackService } from 'src/app/services/feedback.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  pageTitle = 'Food Feedback system';
  public showContent: boolean = false;
  addFeedback: any;
  feedbackForm: FormGroup;
  submitted = false;
  showTitle: boolean;
  rating: number;

  get feedbackform() {
    return this.feedbackForm.controls;
  }

  constructor(private feedbackservice:FeedbackService, private router: Router, private formBuilder:FormBuilder, private localstroageservice:LocalStorageService) { }

  ngOnInit() {
    this.hideNonAdminContent();
    this.feedbackForm = this.formBuilder.group({
      date: ['',Validators.required],
      type_of_meal: ['',Validators.required],
      rating: ['',Validators.required],
      comments: ['',Validators.required],
    });
    
  }
  OnClickAddFeedback() {
    this.showContent = true;
  } 
  OnSubmit() {
    this.submitted = true;
    var loggedEmail = this.localstroageservice.RetrieveItem("Email_id");
    this.feedbackservice.AddFeedback(this.feedbackform.date.value,this.feedbackform.type_of_meal.value,this.feedbackform.rating.value,this.feedbackform.comments.value,loggedEmail)
    .subscribe(
      addFeedback => {
      this.addFeedback = addFeedback;
      alert('Your feedback is saved. Thank you !');
      this.feedbackForm.reset();
      },
       error => {
         alert("You have already registered your feedback for this date and meal.");
         this.feedbackForm.reset();
       }
    );
  }
  OnClickViewRating() {
    this.router.navigate(["/rating"]);
  }
  OnClickViewComments() {
    this.router.navigate(["/viewcomments"]);
  }
  OnClickLogout() {
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
