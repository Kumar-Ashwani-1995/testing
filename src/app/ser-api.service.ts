import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SerApiService {

  constructor(private http:HttpClient) {
    // this.getTodos().subscribe(d=>console.log(d))
   }
  url="https://jsonplaceholder.typicode.com/posts";
  getTodos(){
    return this.http.get(this.url)
  }
  getPostById(id:any){
    return this.http.get(this.url+"/"+id)
  }
  PostById(body:any,id:any){
    return this.http.post(this.url+"/"+id,body)
  }
}
