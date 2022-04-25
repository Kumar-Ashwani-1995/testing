import { Component } from '@angular/core';
import { SerApiService } from './ser-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testing';
  // constructor(private  api : SerApiService){}
}
