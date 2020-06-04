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
    this.category.addCategory(this.categoryName);
    console.log("add-category-click");
    this.router.navigateByUrl("/home/manage-cat");
  }
}
