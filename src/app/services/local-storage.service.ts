import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  
  RetrieveItem(key: string): any {
    return localStorage.getItem(key);
  }
  setitem(key: string,data:any): void {
    localStorage.setItem(key,data);
  }
  removeItem(key: string): void {
    localStorage.removeItem(key);
  }
}
