import { Component, OnInit } from '@angular/core';
import { Credentials } from 'src/app/models/credentials';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  ngOnInit(): void {
    this.credentials.email = ''
    this.credentials.password = ''
  }

  constructor(private router: Router) {}

  credentials : Credentials = {
    email:"",
    password:""
  }

  login(){
    // alert("Email: " + this.credentials.email)
    
    this.router.navigate(['/home']);
  }

}
