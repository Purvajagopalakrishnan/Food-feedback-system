import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: LoginService;
  let LoginSpy : jasmine.Spy;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ReactiveFormsModule, FormsModule, HttpClientModule, RouterTestingModule],
      providers: [
        {
          provide: LoginService,
          useValue: jasmine.createSpyObj('LoginService',['login'])
        }
      ]
    }).compileComponents();
    service =  TestBed.get(LoginService);
    LoginSpy = TestBed.get(LoginService).login;
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should return observable of number', () => {
    LoginSpy.and.returnValue(of(true));
    service.login('test', 'test').subscribe(
      (x) =>{
        expect(x).toBeTruthy();
      }
  )});
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('form invalid when empty', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });
  it('email field validity', () => {
    let errors = {};
    let email = component.loginForm.controls['email_id'];
    expect(email.valid).toBeFalsy();
    errors = email.errors || {};
    expect(errors['required']).toBeTruthy();
    email.setValue("test");
    errors = email.errors || {};
    expect(errors['required']).toBeFalsy();
  });
  it('password field validity', () => {
    let errors = {};
    let password = component.loginForm.controls['password'];
    errors = password.errors || {};
    expect(errors['required']).toBeTruthy();
    password.setValue("1234567");
    errors = password.errors || {};
    expect(errors['required']).toBeFalsy();
  });
});
