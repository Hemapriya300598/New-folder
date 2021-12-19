import { Injectable } from '@angular/core';
import{HttpClient, HttpClientModule}from '@angular/common/http';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  postContactDetails(data:any){
    return this.http.post<any>("http://localhost:3000/posts/",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  getContactDetailsList(){
    return this.http.get<any>("http://localhost:3000/posts/")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteContactDetailsList(id:string){
    return this.http.delete<any>("http://localhost:3000/posts/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
