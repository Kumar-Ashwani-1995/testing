import { Component, OnInit } from '@angular/core';
import { SerApiService } from '../ser-api.service';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {

  arr:any;
  constructor( private apiService:SerApiService) { }
  boolValue=false;
  ngOnInit(): void {
    this.setUp();
  }
  setUp() {
    this.apiService.getTodos().subscribe((data)=>{
      this.arr=data;
    })
  }

}
