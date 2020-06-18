import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user;
  constructor(public db: AngularFirestore,public auth:AuthService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
    this.db.collection("users").doc(this.auth.uid).valueChanges().subscribe(res=>{
      console.log(res)
      this.user=res;
    })
  }

}
