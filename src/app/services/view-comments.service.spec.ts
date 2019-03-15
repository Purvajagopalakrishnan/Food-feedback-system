import { TestBed } from '@angular/core/testing';
import { ViewCommentsService } from './view-comments.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('ViewCommentsService', () => {
  let service: ViewCommentsService;
  let getSpy: jasmine.Spy;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ViewCommentsService,
        {
          provide: HttpClient,
          useValue: jasmine.createSpyObj('HttpClient',['get'])
        }
      ]
  });
  service = TestBed.get(ViewCommentsService);
  getSpy = TestBed.get(HttpClient).get;
});

  it('should be created', () => {
    const service: ViewCommentsService = TestBed.get(ViewCommentsService);
    expect(service).toBeTruthy();
  });
  it('should return observable of ViewComments', () => {
    getSpy.and.returnValue(of(true));
    service.GetFeedbackDetails().subscribe(
      (response) => {
        expect(response).toBeTruthy();
      }
    )
  });
});
