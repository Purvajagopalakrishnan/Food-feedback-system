import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  pageTitle = 'Food Feedback system';
  registerForm: FormGroup;
  submitted = false;
  registrationdetails: any;
  get registerform() {
    return this.registerForm.controls;
  }

  constructor(private registerservice: RegistrationService,private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      emp_id: ['',Validators.required],
      username: ['',Validators.required],
      email_id: ['', [ Validators.required, Validators.pattern("^[a-zA-Z0-9_.+-]+@(cesltd)\.com$")]],
      password: ['',[ Validators.required,Validators.minLength(6)]],
    });
  }
  OnRegister() {
    this.registerservice.register(this.registerform.emp_id.value,this.registerform.username.value,this.registerform.email_id.value,this.registerform.password.value)
    .subscribe(
      registrationdetails => {
        this.registrationdetails = registrationdetails;
        alert("You have successfully registered !! You can login now");
      },
      error => {}
    );
  }
}
