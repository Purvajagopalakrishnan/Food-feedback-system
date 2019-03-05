import { TestBed } from '@angular/core/testing';
import { RegistrationService } from './registration.service';
import { HttpClient } from '@angular/common/http';
import { Registration } from '../Class & Interfaces/registration';
import { of } from 'rxjs';

describe('RegistrationService', () => {
  let service: RegistrationService;
  let postSpy: jasmine.Spy;
  beforeEach(() => {
    TestBed.configureTestingModule({
    providers: [
      RegistrationService,
      {
        provide: HttpClient,
        useValue: jasmine.createSpyObj('HttpClient', ['post'])
      }
    ]
  });
  service = TestBed.get(RegistrationService);
  postSpy = TestBed.get(HttpClient).post;
});

  it('should be created', () => {
    const service: RegistrationService = TestBed.get(RegistrationService);
    expect(service).toBeTruthy();
  });
  it('should return observable of boolean', () => {
    postSpy.and.returnValue(of(true));
    service.register('test','test','test','test').subscribe(
      (response) => {
        expect(response).toBeTruthy();
      }
    )
  });
});
