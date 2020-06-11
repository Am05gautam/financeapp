import { Component, OnInit } from '@angular/core';
import { ExpenceService } from 'src/app/services/expence.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-exp',
  templateUrl: './edit-exp.component.html',
  styleUrls: ['./edit-exp.component.css']
})
export class EditExpComponent implements OnInit {

  constructor(public expenceservice:ExpenceService,public router:Router,public route:ActivatedRoute) { }
  expId;
  expence;
  ngOnInit(): void {
    this.expId=this.route.snapshot.paramMap.get("id")
    console.log(this.expId)
    this.getExpence();
  }

  getExpence(){
    this.expenceservice.getExpenceByDocId(this.expId).subscribe(res=>{
      console.log(res +"expence")
      this.expence=res;
    })
  }

  update(){
    this.expenceservice.updateExpence(this.expId,this.expence).then(res=>{
      console.log(res + "hello002")
      this.router.navigateByUrl("/home/manage-exp")
    })
  }

}
