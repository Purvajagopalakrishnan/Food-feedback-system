import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private registerurl = ("https://localhost:44346/api/registration");

  constructor(private http:HttpClient) { }
  
  register(emp_id:string,username:string,email_id:string,password:string): Observable<boolean> {
    return this.http.post<boolean>(this.registerurl,{EmpId:emp_id,Username:username,Email:email_id,Password:password});
  }
}
