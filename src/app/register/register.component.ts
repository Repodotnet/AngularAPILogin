import { Component, OnInit } from '@angular/core';
import { RegServiceService } from '../reg-service.service';
import { Router } from '@angular/router';
import {Register} from '../register';    
import {Observable} from 'rxjs';    
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  data = false;    
  UserForm: any;    
  message:string;    
  constructor(private formbulider: FormBuilder,private router: Router,private loginService:RegServiceService) { }    

  ngOnInit() {    
    this.UserForm = this.formbulider.group({    
      UserName: ['', [Validators.required]],    
      //LoginName: ['', [Validators.required]],    
      Password: ['', [Validators.required]],    
      Email: ['', [Validators.required]],    
      ContactNo: ['', [Validators.required]],    
      Address: ['', [Validators.required]],    
    });    
  }    
  /*  onFormSubmit()    
  {    
    const user = this.UserForm.value;    
    this.Createemployee(user);    
  }  */   
  RegisterUser()    
  {    
  this.loginService.Register(this.UserForm.value).subscribe(    
    (data)=>    
    {    
      console.log(data);
       
      this.UserForm.reset();    
      this.message="Registered Successfully"
      //this.router.navigateByUrl('Login')
    },
    error=>{
      console.log(error.message)
      this.message="User already exists"
    }
    );    
  }    

}
