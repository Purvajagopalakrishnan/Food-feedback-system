import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ViewRatingService {
  private viewRatingUrl="https://localhost:44321/api/viewrating";
  
  constructor(private http:HttpClient, private localStorageService: LocalStorageService) { }
  
  ViewRating(date:Date,type_of_meal:string): Observable<any>{
    const options = {
      headers: this.createHeaders()
    };
    return this.http.post(this.viewRatingUrl,{SelectDate:date,TypeOfMeal:type_of_meal},options);
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
