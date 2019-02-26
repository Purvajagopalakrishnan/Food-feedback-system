import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  RetrieveItem(key: string): string {
    return localStorage.getItem(key);
  }
  setitem(key: string,data:string): void {
    localStorage.setItem(key,data);
  }
}
