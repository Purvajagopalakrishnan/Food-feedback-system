import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ViewRatingService {
  private Viewratingurl=("https://localhost:44346/api/viewrating");
  
  constructor(private http:HttpClient) { }
  
  ViewRating(date:Date,type_of_meal:string){
    return this.http.post(this.Viewratingurl,{Select_Date:date,Type_of_meal:type_of_meal});
  }
}
