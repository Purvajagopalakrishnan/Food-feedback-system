import { TestBed } from '@angular/core/testing';
import { FeedbackService } from './feedback.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('FeedbackService', () => {
  let service: FeedbackService;
  let postSpy: jasmine.Spy;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FeedbackService,
        {
          provide:HttpClient,
          useValue: jasmine.createSpyObj('HttpClient',['post'])
        }
      ]
    });
    service = TestBed.get(FeedbackService);
    postSpy = TestBed.get(HttpClient).post;
  });

  it('should be created', () => {
    const service: FeedbackService = TestBed.get(FeedbackService);
    expect(service).toBeTruthy();
  });
  it('should return observable of AddFeedback', () =>{
    postSpy.and.returnValue(of(true));
    service.AddFeedback(new Date('28 Feb 2019 00:00:00 GMT'),'test',5,'good').subscribe(
      (response) => {
        expect(response).toBeTruthy();
      }
    )
  });
});