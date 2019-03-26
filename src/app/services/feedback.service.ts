import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private Feedbackurl=("https://localhost:44321/api/addfeedback");

  constructor(private http:HttpClient, private localStorageService: LocalStorageService) { }

  AddFeedback(date:Date,type_of_meal:string,rating:number,comments:string,email:string ){

    const options = {
      headers: this.createHeaders()
    };

    return this.http.post(this.Feedbackurl,{SelectDate:date,TypeOfMeal:type_of_meal,Rating:rating,Comments:comments,Email:email}, options);
  }

  private createHeaders(): { [key: string]: string } {
    const headers = {
      'Accept': 'application/json'
    };

    const token = this.localStorageService.RetrieveItem('token');
    if (token !== null) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    return headers;
  }
}
