import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { identifierName } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  backend_url= "http://localhost:3000/"
  constructor(private http: HttpClient) { }

  add(data:any){
    return this.http.post("http://localhost:3000/add",data)
  }
  user(){
    return this.http.get("http://localhost:3000/user")
  }

  deleteuser(id:string){
    return this.http.delete(`${"http://localhost:3000/"}userdelete/${id}`)
  }
  
   checked(id:string,is_checked:any){
    return this.http.put(`${this.backend_url+"update/"}${id}/${is_checked}`,{})
    
    }
}
