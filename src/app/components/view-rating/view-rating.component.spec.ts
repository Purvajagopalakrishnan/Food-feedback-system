import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRatingComponent } from './view-rating.component';
import { ViewRatingService } from 'src/app/services/view-rating.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('ViewRatingComponent', () => {
  let component: ViewRatingComponent;
  let fixture: ComponentFixture<ViewRatingComponent>;
  let service: ViewRatingService;
  let ViewratingSpy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRatingComponent ],
      imports: [ReactiveFormsModule,FormsModule,HttpClientModule,RouterTestingModule],
      providers: [
        {
          provide: ViewRatingService,
          useValue: jasmine.createSpyObj('ViewRatingService',['ViewRating'])
        }
      ]
    })
    .compileComponents();
    service = TestBed.get(ViewRatingService);
    ViewratingSpy = TestBed.get(ViewRatingService).ViewRating;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('form invalid when empty', () => {
    expect(component.viewratingForm.valid).toBeFalsy();
  });
  it('type of meal validity', () => {
    let errors = {};
    let type_of_meal = component.viewratingForm.controls['type_of_meal'];
    expect(type_of_meal.valid).toBeFalsy();
    errors = type_of_meal.errors || {};
    expect(errors['required']).toBeTruthy();

    type_of_meal.setValue("Dinner");
    errors = type_of_meal.errors || {};
    expect(errors['required']).toBeFalsy();
  });
});
