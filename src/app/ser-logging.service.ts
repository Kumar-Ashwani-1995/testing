import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SerLoggingService {

  constructor() { }

  log(msg:any){
    console.log(msg)
  }
}
