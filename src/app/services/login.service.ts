import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Userdetails } from '../Class & Interfaces/userdetails';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginurl = ("https://localhost:44321/api/login");

  constructor( private http:HttpClient ) { }
  
  login(email_id: string,password:string): Observable<Userdetails> {
    return this.http.post<Userdetails>(this.loginurl,{Email:email_id,Password:password});
  }
}
