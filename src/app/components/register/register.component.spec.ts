import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterComponent } from './register.component';
import { RegistrationService } from 'src/app/services/registration.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let service: RegistrationService;
  let RegistrationSpy : jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports: [ReactiveFormsModule, FormsModule, HttpClientModule, RouterTestingModule],
      providers: [
        {
          provide: RegistrationService,
          useValue: jasmine.createSpyObj('RegistrationService',['register'])
        }
      ]
    })
    .compileComponents();
    service =  TestBed.get(RegistrationService);
    RegistrationSpy = TestBed.get(RegistrationService).register;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should return observable of boolean', () => {
    RegistrationSpy.and.returnValue(of(true));
    service.register('test', 'test','test','test').subscribe(
      (x) =>{
        expect(x).toBeTruthy();
      }
  )});
  it('form invalid when empty', () => {
    expect(component.registerForm.valid).toBeFalsy();
  });
  it('email field validity', () => {
    let errors = {};
    let email = component.registerForm.controls['email_id'];
    expect(email.valid).toBeFalsy();
    errors = email.errors || {};
    expect(errors['required']).toBeTruthy();

    email.setValue("test");
    errors = email.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['pattern']).toBeTruthy();

    email.setValue("test@cesltd.com");
    errors = email.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['pattern']).toBeFalsy();
  });
  it('password field validity', () => {
    let errors = {};
    let password = component.registerForm.controls['password'];
    errors = password.errors || {};
    expect(errors['required']).toBeTruthy();

    password.setValue("12345");
    errors = password.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['minlength']).toBeTruthy();

    password.setValue("welcome123");
    errors = password.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['minlength']).toBeFalsy();
  });
  it('username field validity', () => {
    let errors = {};
    let username = component.registerForm.controls['username'];
    errors = username.errors || {};
    expect(errors['required']).toBeTruthy();
    username.setValue("test");
    errors = username.errors || {};
    expect(errors['required']).toBeFalsy();
  });
  it('employee Id field validity', () => {
    let errors = {};
    let emp_id = component.registerForm.controls['emp_id'];
    errors = emp_id.errors || {};
    expect(errors['required']).toBeTruthy();
    emp_id.setValue("test");
    errors = emp_id.errors || {};
    expect(errors['required']).toBeFalsy();
  });
});
