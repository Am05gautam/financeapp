import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-cat',
  templateUrl: './add-cat.component.html',
  styleUrls: ['./add-cat.component.css']
})
export class AddCatComponent implements OnInit {
  categoryName;
  constructor(public category:CategoryService,public router: Router) { }

  ngOnInit(): void {
  }
  
  addCategory(){
    if(this.categoryName!=null){
      this.category.addCategory(this.categoryName);
      this.router.navigateByUrl("/home/manage-cat");
    }
    else{
      alert("Please fill out the field")
    }
  }
}
