import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-pswd',
  templateUrl: './forget-pswd.component.html',
  styleUrls: ['./forget-pswd.component.css']
})
export class ForgetPswdComponent implements OnInit {
  email;
  constructor(public auth: AuthService,public router:Router) { }

  ngOnInit(): void {
  }


  reset(){
    console.log("forgot-pswd")
    this.auth.reset(this.email)
    this.auth.isAuthenticated()
    alert("Check your mail.")
    this.router.navigateByUrl("/auth/sign-in")
  }
}
