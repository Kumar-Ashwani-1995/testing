import { Injectable } from '@angular/core';
import { SerLoggingService } from './ser-logging.service';

@Injectable({
  providedIn: 'root'
})
export class SerBasicService {

  constructor(private logging:SerLoggingService) { }

  add(val1:any,val2:any){
    this.logging.log("add")
    return parseInt(val1)+parseInt(val2)
  }
  subtract(val1:any,val2:any){
    this.logging.log("subtract")
    return parseInt(val1)-parseInt(val2)
  }
}
