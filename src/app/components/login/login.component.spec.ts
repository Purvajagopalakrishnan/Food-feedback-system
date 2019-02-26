import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ReactiveFormsModule, FormsModule, RouterTestingModule],
      providers: [
        FormBuilder,
        LoginService
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('form invalid when empty', () => {
    expect(component.loginform.valid).toBeFalsy();
  });
  // it('form should be invalid', async(() => {
  //   component.loginForm.controls['email_id'].setValue('');
  //   component.loginForm.controls['password'].setValue('');
  //   expect(component.loginForm.valid).toBeFalsy();
  // }));
});
