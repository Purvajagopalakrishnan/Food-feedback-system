import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackComponent } from './feedback.component';
import { FeedbackService } from 'src/app/services/feedback.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('FeedbackComponent', () => {
  let component: FeedbackComponent;
  let fixture: ComponentFixture<FeedbackComponent>;
  let service: FeedbackService;
  let FeedbackSpy : jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackComponent ],
      imports: [ReactiveFormsModule,FormsModule,HttpClientModule,RouterTestingModule],
      providers: [
        {
          provide: FeedbackService,
          useValue: jasmine.createSpyObj('FeedbackService',['AddFeedback'])
        }
      ]
    })
    .compileComponents();
    service =  TestBed.get(FeedbackService);
    FeedbackSpy = TestBed.get(FeedbackService).register;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('form invalid when empty', () => {
    expect(component.feedbackForm.valid).toBeFalsy();
  });
  it('type of meal validity', () => {
    let errors = {};
    let type_of_meal = component.feedbackForm.controls['type_of_meal'];
    expect(type_of_meal.valid).toBeFalsy();
    errors = type_of_meal.errors || {};
    expect(errors['required']).toBeTruthy();

    type_of_meal.setValue("Dinner");
    errors = type_of_meal.errors || {};
    expect(errors['required']).toBeFalsy();
  });
  it('rating field validity', () => {
    let errors = {};
    let rating = component.feedbackForm.controls['rating'];
    expect(rating.valid).toBeFalsy();
    errors = rating.errors || {};
    expect(errors['required']).toBeTruthy();

    rating.setValue(5);
    errors = rating.errors || {};
    expect(errors['required']).toBeFalsy();
  });
  it('comments field validity', () => {
    let errors = {};
    let comments = component.feedbackForm.controls['comments'];
    expect(comments.valid).toBeFalsy();
    errors = comments.errors || {};
    expect(errors['required']).toBeTruthy();

    comments.setValue("good");
    errors = comments.errors || {};
    expect(errors['required']).toBeFalsy();
  });
});
