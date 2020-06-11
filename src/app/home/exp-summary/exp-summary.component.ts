import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ExpenceService } from 'src/app/services/expence.service';

@Component({
  selector: 'app-exp-summary',
  templateUrl: './exp-summary.component.html',
  styleUrls: ['./exp-summary.component.css']
})
export class ExpSummaryComponent implements OnInit {
  category;
  categories=[]
  expences=[]
  total=0;
  constructor(public categoryservice:CategoryService,public expenceservice:ExpenceService) { }

  ngOnInit(): void {
    this.categoryservice.getAllCategories().subscribe(res=>{
      this.categories=res;
    })
  }

  changeCat(event){
    console.log(event)
    this.expenceservice.getExpenceByCatId(event.target.value).subscribe(res=>{
      console.log(res + "hello003")
      this.expences=res;
      this.total=0;
      this.expences.forEach(element=>{
        this.total=this.total+element.amount;
      })
    })
  }

}
