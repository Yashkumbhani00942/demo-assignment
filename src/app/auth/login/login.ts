import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  username = new FormControl("");
  password = new FormControl("");
  

  constructor(public router:Router) {}

  signIn() { 
    // this.username.value, this.password.value
    // console.log(this.username.value, this.password.value);
    
    if (this.username.value == "admin" &&  this.password.value == "admin@123") {
      this.router.navigate(['Dashboard'])
    } else {
      alert(`Use below credentials deatils for sign-up
        Username : admin
        Password : admin@123`)
    }
  }

  // reset() {
  //   this.username.setValue("");
  //   this.password.setValue("");  
  // }
  
}
