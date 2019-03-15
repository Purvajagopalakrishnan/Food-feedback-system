import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private Feedbackurl=("https://localhost:44321/api/addfeedback");

  constructor(private http:HttpClient) { }
  AddFeedback(date:Date,type_of_meal:string,rating:number,comments:string,email:string){
    return this.http.post(this.Feedbackurl,{SelectDate:date,TypeOfMeal:type_of_meal,Rating:rating,Comments:comments,Email:email});
  }
}
