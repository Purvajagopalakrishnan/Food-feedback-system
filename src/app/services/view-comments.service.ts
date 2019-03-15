import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewCommentsService {
  private viewfeedbackUrl = "https://localhost:44321/api/addfeedback";

  constructor(private http: HttpClient) { }
  GetFeedbackDetails() {
    return this.http.get(this.viewfeedbackUrl);
  } 
}
