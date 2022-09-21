import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GetapiService {

  constructor( private http:HttpClient) { }
  apicall(){
    return this.http.get('https://jsonplaceholder.typicode.com/users/1/todos')
  }
}
