import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegServiceService } from '../reg-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model : any={};    

  errorMessage:string;    
  constructor(private router:Router,private Service:RegServiceService) { }    

  ngOnInit() {    
    sessionStorage.removeItem('UserName');    
    sessionStorage.clear();    
  }    
  login(){    
       
    this.Service.Login(this.model).subscribe(
        
      (res) => {  
                     
          console.log("Success");
          sessionStorage.setItem('username',this.model.UserName)
          //this.Service.sendstatus(true);
          this.Service.subject.next(true);
          this.router.navigate(['Home']);     
           
      },    
      error => {    
        this.errorMessage = "Login Failed";    
      }
      );    
  };    
 }    


