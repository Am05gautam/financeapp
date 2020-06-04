import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-cat',
  templateUrl: './edit-cat.component.html',
  styleUrls: ['./edit-cat.component.css']
})
export class EditCatComponent implements OnInit {
  catId;
  category;
  constructor(public categoryservice:CategoryService,public router:Router,public route:ActivatedRoute) {
   }

  ngOnInit(): void {
    this.catId= this.route.snapshot.paramMap.get("id")
    console.log(this.catId)
    this.getCategory();
  }
  
  getCategory(){
    this.categoryservice.getCategoryByDocId(this.catId).subscribe(res=>{
      console.log(res + "category")
      this.category=res
    })
  }

  save(){
    this.categoryservice.updateCategory(this.catId,this.category).then(res=>{
      this.router.navigateByUrl("/home/manage-cat")
    })
  }
}
