import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewRatingService {
  private Viewratingurl="https://localhost:44321/api/viewrating";
  
  constructor(private http:HttpClient) { }
  
  ViewRating(date:Date,type_of_meal:string): Observable<any>{
    return this.http.post(this.Viewratingurl,{SelectDate:date,TypeOfMeal:type_of_meal});
  }
}
