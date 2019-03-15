import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeedbackService } from 'src/app/services/feedback.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

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
      comments: ['',Validators.required]
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
      },
       error => {}
    );
  }
  OnClickViewRating() {
    this.router.navigate(["/rating"]);
  }
  OnClickViewComments() {
    this.router.navigate(["/viewcomments"]);
  }
  OnClickLogout() {
    this.localstroageservice.removeItem('IsAdmin');
    this.router.navigate(['/login']);
  }

  hideNonAdminContent(): void {
    (this.localstroageservice.RetrieveItem("IsAdmin") == 1) ? this.showTitle = true : this.showTitle = false;
  }
}
