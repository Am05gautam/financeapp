import { Injectable } from '@angular/core';
import { Category } from '../auth/models/category.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  // categories: Category[]=[]
  constructor(private db: AngularFirestore,public auth:AuthService) { 
    // let category=new Category()
    // category.name="Food"
    // this.categories.push(category);
    // category=new Category()
    // category.name="Entertainment"
    // this.categories.push(category);
    this.getAllCategories()
    // this.getAllValuesinDummy();
  }

  addCategory(categoryName:string){
    let category=new Category()
    category.name = categoryName
    console.log("add category");
    // this.categories.push(category);
    let catObject= Object.assign({},category) 
    this.db.collection("users").doc(this.auth.uid).collection("category").add(catObject).then(res=>{
      //alert("Category added successfully")
    }).catch(err=>{
      alert("Some error occurred")
    })
  }

  deleteCategory(id){
    // this.categories.splice(id,1);
    console.log("delete category");
    this.db.collection("users").doc(this.auth.uid).collection("category").doc(id).delete()
  }

  // getAllCategories(){
  //   // return this.categories
  //   return this.db.collection("category").valueChanges()
  // }

  getAllCategories(){
    return this.db.collection("users").doc(this.auth.uid).collection("category").snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    )
  }

  // getAllValuesinDummy(){
  //   this.db.collection("dummy").valueChanges().subscribe(res=>{
  //     console.log(res)
  //   })
  // }

  updateCategory(id,updatedCategory){
    return this.db.collection("users").doc(this.auth.uid).collection("category").doc(id).update(Object.assign({},updatedCategory))
  }

  getCategoryByDocId(id){
    return this.db.collection("users").doc(this.auth.uid).collection("category").doc(id).valueChanges()
  }
}
