import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forget-pswd',
  templateUrl: './forget-pswd.component.html',
  styleUrls: ['./forget-pswd.component.css']
})
export class ForgetPswdComponent implements OnInit {
  email;
  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }


  reset(){
    console.log("forgot-pswd")
    alert("Check your mail.")
  }
}
