import { TestBed, async, inject } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';

describe('AuthGuard', () => {
  let service: AuthGuard;
  let Spy: jasmine.Spy;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
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
    service = TestBed.get(AuthGuard);
    Spy = TestBed.get(LocalStorageService).RetrieveItem;
  });

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
