import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeedbackService } from 'src/app/services/feedback.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  pageTitle = 'Food Feedback system';
  public show_content: boolean = false;
  Add_Feedback: any;
  feedbackForm: FormGroup;
  submitted = false;
  get feedbackform() {
    return this.feedbackForm.controls;
  }

  constructor(private feedbackservice:FeedbackService, private router: Router, private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.feedbackForm = this.formBuilder.group({
      date: ['',Validators.required],
      type_of_meal: ['',Validators.required],
      rating: ['',Validators.required],
      comments: ['',Validators.required]
    });
  }
  OnClickAddFeedback() {
    this.show_content = true;
  } 
  OnSubmit() {
    this.submitted = true;
    this.feedbackservice.AddFeedback(this.feedbackform.date.value,this.feedbackform.type_of_meal.value,this.feedbackform.rating.value,this.feedbackform.comments.value)
    .subscribe(
      Add_Feedback => {
      this.Add_Feedback = Add_Feedback;
      alert('Your feedback is saved. Thank you !');
      },
       error => {}
    );
  }
  OnClickViewRating() {
    this.router.navigate(["/rating"]);
  }
  OnClickLogout() {
    this.router.navigate(['/login']);
  }
}
