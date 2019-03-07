import { TestBed } from '@angular/core/testing';

import { ViewRatingService } from './view-rating.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('ViewRatingService', () => {
  let service: ViewRatingService;
  let postSpy: jasmine.Spy;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ViewRatingService,
        {
          provide: HttpClient,
          useValue: jasmine.createSpyObj('HttpClient',['post'])
        }
      ]
    });
    service = TestBed.get(ViewRatingService);
    postSpy = TestBed.get(HttpClient).post;
  });

  it('should be created', () => {
    const service: ViewRatingService = TestBed.get(ViewRatingService);
    expect(service).toBeTruthy();
  });
  it('should return observable of ViewRating', () =>{
    postSpy.and.returnValue(of(true));
    service.ViewRating(new Date('28 Feb 2019 00:00:00 GMT'),'test').subscribe(
      (response) => {
        expect(response).toBeTruthy();
      }
    )
  });
});
