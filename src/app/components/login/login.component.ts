import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { LoginService } from 'src/app/services/login.service';
import { Userdetails } from 'src/app/Class & Interfaces/userdetails';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  pageTitle = 'Food Feedback system';
  loginForm: FormGroup;
  submitted = false;
  get loginform() { 
    return this.loginForm.controls;
  }

  constructor(private formBuilder: FormBuilder ,private loginservice: LoginService, private router: Router, private localstorage: LocalStorageService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email_id: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  OnLogin() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.loginservice.login(this.loginform.email_id.value, this.loginform.password.value)
    .subscribe(
      (userdetails: Userdetails) => {
        if(userdetails != null)
        {
          this.localstorage.setitem("Email_id",userdetails.email);
          this.localstorage.setitem("isAdmin", userdetails.isAdmin);
          this.localstorage.setitem("token",userdetails.token);
          this.router.navigate(["/addfeedback"]);
        }
        else{
          alert("Invalid email id or password");
        }
      },
      error => {
        alert("Exception");
      }
    );
  }
}
