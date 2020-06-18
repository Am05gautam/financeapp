import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  name;
  email;
  password;
  constructor(public auth:AuthService,public router:Router) { }

  ngOnInit(): void {
  }

  signUp(){
    console.log("signup request")
    this.auth.signUp(this.name,this.email,this.password)
    // this.router.navigateByUrl("/auth/sign-in")
  }
}
