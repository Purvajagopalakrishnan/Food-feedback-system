import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginurl = ("https://localhost:44346/api/login");

  constructor( private http:HttpClient ) { }
  
  login(email_id: string,password:string): Observable<boolean> {
    return this.http.post<boolean>(this.loginurl,{Email:email_id,Password:password});
  }
}
