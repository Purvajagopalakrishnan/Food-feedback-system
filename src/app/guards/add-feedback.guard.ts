import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AddFeedbackGuard implements CanActivate {

  constructor(private router:Router, private localStorageService: LocalStorageService){}
  canActivate(): boolean {
      if(this.localStorageService.RetrieveItem("Email_id") == null) {
        this.router.navigate(['/login']);
        return false;
      }
    return true;
  }
}
