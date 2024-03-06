import { Component } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {


  user: User = {
    fname: '',
    lname: '',
    email: '',
    password: '',
  }

  confirmPassword : string = ''

  signUp(){
    console.log(JSON.stringify(this.user))
  }
}
