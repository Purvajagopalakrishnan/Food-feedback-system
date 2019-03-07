import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private Feedbackurl=("https://localhost:44346/api/addfeedback");

  constructor(private http:HttpClient) { }
  AddFeedback(date:Date,type_of_meal:string,rating:number,comments:string){
    return this.http.post(this.Feedbackurl,{Select_Date:date,Type_of_mtype_ofeal:type_of_meal,Rating:rating,Comments:comments});
  }
}
