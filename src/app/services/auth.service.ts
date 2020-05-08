import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  email="am05gautam@gmail.com";
  password="Gautam@2479";
  isSignedIn=false;
  constructor(public router:Router) { }

  signIn(email,password){
    if(email==this.email && password==this.password){
      this.isSignedIn=true;
      console.log("logged in")
      this.router.navigateByUrl("/home")
    }
    else{
      alert("Invalid credentials")
    }
  }

  logout(){
    console.log("logged out")
    this.isSignedIn=false
    this.router.navigateByUrl("/auth")
  }

  isAuthenticated(){
    return this.isSignedIn
  }
}
