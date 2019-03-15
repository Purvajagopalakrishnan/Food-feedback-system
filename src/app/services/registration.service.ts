import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private registerurl = ("https://localhost:44321/api/registration");

  constructor(private http:HttpClient) { }
  
  register(emp_id:string,username:string,email_id:string,password:string): Observable<any> {
    return this.http.post<any>(this.registerurl,{EmpId:emp_id,Username:username,Email:email_id,Password:password});
  }
}
