import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Router } from '@angular/router';
import { ExpenceService } from 'src/app/services/expence.service';
import { Expence } from 'src/app/auth/models/expence.model';

@Component({
  selector: 'app-add-exp',
  templateUrl: './add-exp.component.html',
  styleUrls: ['./add-exp.component.css']
})
export class AddExpComponent implements OnInit {
  expence= new Expence()
  categories=[];
  constructor(public expenceservice:ExpenceService,public router:Router,public categoryservice:CategoryService) { }

  ngOnInit(): void {
    this.getUserCats();
  }

  addExpence(){
    this.expenceservice.addExpence(this.expence).then(res=>{
      this.router.navigateByUrl("/home/manage-exp")
    }).catch(err=>{
      alert("Some error occured!")
    })
  }

  getUserCats(){
    this.categoryservice.getAllCategories().subscribe(res=>{
      // console.log(res + "hello001")
      this.categories=res
    })
  }
}
