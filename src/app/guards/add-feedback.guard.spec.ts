import { TestBed, inject } from '@angular/core/testing';
import { AddFeedbackGuard } from './add-feedback.guard';
import { Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';

describe('AddFeedbackGuard', () => {
  let service: AddFeedbackGuard;
  let Spy: jasmine.Spy;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AddFeedbackGuard,
        {
          provide: Router,
          useValue: jasmine.createSpyObj('Router',['navigate'])
        },
        {
          provide: LocalStorageService,
          useValue: jasmine.createSpyObj('localstorageservice',['RetrieveItem'])
        }
      ]
    });
    service = TestBed.get(AddFeedbackGuard);
    Spy = TestBed.get(LocalStorageService).RetrieveItem;
  });

  it('should ...', inject([AddFeedbackGuard], (guard: AddFeedbackGuard) => {
    expect(guard).toBeTruthy();
  }));
  it('should return boolean', () => {
    Spy.and.returnValue(('john89@cesltd.com'));
    expect(service.canActivate()).toBe(true);
  });
  it('should return false if email is null', () => {
    Spy.and.returnValue((null));
    expect(service.canActivate()).toBe(false);
  });
});
