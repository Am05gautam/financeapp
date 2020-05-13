import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-all-cat',
  templateUrl: './all-cat.component.html',
  styleUrls: ['./all-cat.component.css']
})
export class AllCatComponent implements OnInit {
  categories=[];
  constructor(public category:CategoryService) { }

  ngOnInit(): void {
    this.categories=this.category.getAllCategories()
  }

}
