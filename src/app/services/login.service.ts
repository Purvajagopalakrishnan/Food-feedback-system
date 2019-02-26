import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginurl = ("");

  constructor( private http:HttpClient ) { }
  login(email_id: string,password:string) {
    return this.http.post(this.loginurl,{Email:email_id,Password:password});
  }
}
