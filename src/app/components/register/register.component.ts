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
  successMessage = "Successfully registered";
  emailMessage = "Email id already exists";
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
  onRegister() {
    this.submitted=true;
    if(this.registerForm.invalid) {
      return;
    }
    this.registerservice.register(this.registerform.emp_id.value,this.registerform.username.value,this.registerform.email_id.value,this.registerform.password.value)
    .subscribe(
      registrationdetails => {
        if(registrationdetails == 1) {
          alert("You have successfully registered !! You can login now");
        }
        else if(registrationdetails == 2)
        {
          alert("Email id already exists");
        }
        else {
          alert("Employee id already exists");
        }
        this.registerForm.reset();
      },
      error => {}
    );
  }
}
