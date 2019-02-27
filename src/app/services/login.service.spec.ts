import { TestBed } from '@angular/core/testing';
import { LoginService } from './login.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('LoginService', () => {
  let service: LoginService;
  let postSpy: jasmine.Spy;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoginService,
        {
          provide: HttpClient,
          useValue: jasmine.createSpyObj('HttpClient', ['post'])
        }
      ]
    });
    service = TestBed.get(LoginService);
    postSpy = TestBed.get(HttpClient).post;
  });
  
  it('should be created', () => {
    const service: LoginService = TestBed.get(LoginService);
    expect(service).toBeTruthy();
  });
  it('should return observable of boolean', () => {
    postSpy.and.returnValue(of(true));
    service.login('test', 'test').subscribe(
      (x) =>{
        expect(x).toBeTruthy();
      }
    );
  });
});
