import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ViewCommentsService {
  private viewfeedbackUrl = "https://localhost:44321/api/addfeedback";

  constructor(private http: HttpClient,private localStorageService:LocalStorageService) { }
  GetFeedbackDetails() {
    const options = {
      headers: this.createHeaders()
    };
    return this.http.get(this.viewfeedbackUrl,options);
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
