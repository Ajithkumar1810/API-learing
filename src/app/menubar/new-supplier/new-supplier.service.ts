import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewSupplierService {
baseURL='http://18.139.84.119:5002/add-suppliers';
  constructor(private http:HttpClient) { }
  createAndStorePost(SupplierDetailsApi:String){
    this.http.post(this.baseURL,SupplierDetailsApi).subscribe(posts=>{
      console.log(posts)
    });
  }
  fetchPost(){
    return this.http.get('');
    // .pipe(map(responseData => {
    //   let postsArray:any = [];
    //   for (let key in responseData) {
    //     if (responseData.hasOwnProperty(key)) {
    //       postsArray.push({...responseData[key],  id: key})
    //     }
    //   }
    //   return postsArray;
    // }))
  }

}
