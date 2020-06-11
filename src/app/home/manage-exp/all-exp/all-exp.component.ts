import { Component, OnInit } from '@angular/core';
import { ExpenceService } from 'src/app/services/expence.service';

@Component({
  selector: 'app-all-exp',
  templateUrl: './all-exp.component.html',
  styleUrls: ['./all-exp.component.css']
})
export class AllExpComponent implements OnInit {
  expences=[];
  startdate;
  enddate;
  constructor(public expenceservice: ExpenceService) { }

  ngOnInit(): void {
    this.expenceservice.getAllExpences().subscribe(res=>{
      this.expences=res
    })
  }

  delete(id){
    this.expenceservice.deleteExpence(id)
  }

  // getByDate(){
  //   this.expenceservice.getExpenceBetweenDate(this.startdate,this.enddate).subscribe(res=>{
  //     console.log(res)
  //     this.expences=res;
  //   })
  // }
  
}

