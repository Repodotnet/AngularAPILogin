import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegServiceService } from '../reg-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user :string;
  constructor(private router:Router,private service:RegServiceService) { }

  ngOnInit(): void {
    this.user=sessionStorage.getItem('username')
    if(this.user === null)
      this.router.navigate(['Login']); 
  }

  

}
