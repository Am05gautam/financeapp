import { Injectable } from '@angular/core';
import { Category } from '../auth/models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories: Category[]=[]
  constructor() { 
    let category=new Category()
    category.name="Food"
    this.categories.push(category);
    category=new Category()
    category.name="Entertainment"
    this.categories.push(category);
  }

  addCategory(categoryName:string){
    let category=new Category()
    category.name = categoryName
    console.log("add category");
    this.categories.push(category);
  }

  deleteCategory(id){
    this.categories.splice(id,1);
    console.log("delete category");
  }

  getAllCategories(){
    return this.categories
  }
}
