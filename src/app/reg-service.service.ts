import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';  
import {HttpHeaders} from '@angular/common/http';  
import { from, Observable, Subject } from 'rxjs';  
import { Register } from "../app/register"; 

@Injectable({
  providedIn: 'root'
})
export class RegServiceService {

  public subject=new Subject<boolean>();
  Url :string;  
  token : string;  
  header : any;  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      
    })}

  constructor(private http : HttpClient) {   

    //this.Url = 'http://localhost:14812/api/Login/';  
    this.Url='http://localhost:57596/api/users';
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
    
    const headerSettings: {[name: string]: string | string[]; } = {};  
    this.header = new HttpHeaders(headerSettings);  
  }  

/*   sendstatus(message:boolean)
  {
    this.subject.next(message)
  } */
  recievedStatus():Observable<boolean>
  {
    return this.subject.asObservable();
  }
  Login(model : any){        
    return this.http.post<any>(this.Url+'/UserLogin',JSON.stringify(model),this.httpOptions );  
  }  
   /* CreateUser(register:Register)  
   {  
    return this.http.post<Register[]>(this.Url + '/createcontact/', register, this.httpOptions)  
   }  */ 
   Register(register:Register)  
   {      
    return this.http.post<Register[]>(this.Url , register, this.httpOptions)  
   } 
}
