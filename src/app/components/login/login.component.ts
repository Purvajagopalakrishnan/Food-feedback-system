import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { LoginService } from 'src/app/services/login.service';

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
      userdetails => {
        if(userdetails == true) {
          this.localstorage.setitem("Email_id", <string>this.loginForm.get("email_id").value);
          this.router.navigate(["/addfeedback"]);
        }
        else {
          alert("Invalid email id or password");
        }
      },
      error => {}
    );
  }
}
