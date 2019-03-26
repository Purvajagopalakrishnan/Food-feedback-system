import { TestBed, inject } from '@angular/core/testing';
import { ViewCommentsGuard } from './view-comments.guard';
import { Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';

describe('ViewCommentsGuard', () => {
  let service: ViewCommentsGuard;
  let Spy: jasmine.Spy;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ViewCommentsGuard,
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
    service = TestBed.get(ViewCommentsGuard);
    Spy = TestBed.get(LocalStorageService).RetrieveItem;
  });

  it('should ...', inject([ViewCommentsGuard], (guard: ViewCommentsGuard) => {
    expect(guard).toBeTruthy();
  }));
  it('should return true if admin log in', () =>{
    Spy.and.returnValue((true));
    expect(service.canActivate()).toBe(true);
  });
  it('should return false if non-admin log in', () =>{
    Spy.and.returnValue((false));
    expect(service.canActivate()).toBe(false);
  });
});
