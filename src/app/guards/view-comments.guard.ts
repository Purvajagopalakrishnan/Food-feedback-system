import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ViewCommentsGuard implements CanActivate {

  constructor ( private router:Router, private localStorageService:LocalStorageService){}
  canActivate(): boolean {
      const currentUser = this.localStorageService.RetrieveItem("isAdmin");
      if(currentUser) {
        const isAdminValue: string = this.localStorageService.RetrieveItem('isAdmin');
        if (isAdminValue === "false") {
         this.router.navigate(['/addfeedback']);
         return false;
        }
        else {
          return true;
        }
      }
      this.router.navigate(['/login']);
      return false;
    }
}
