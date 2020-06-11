import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Expence } from '../auth/models/expence.model';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExpenceService {

  constructor(private db:AngularFirestore,public auth:AuthService) { }

  addExpence(expence:Expence){
    let newExpence= Object.assign({},expence)
    return this.db.collection("users").doc(this.auth.uid).collection("expence").add(newExpence)
  }

  deleteExpence(id){
    this.db.collection("users").doc(this.auth.uid).collection("expence").doc(id).delete()
  }

  getAllExpences(){
    return this.db.collection("users").doc(this.auth.uid).collection("expence").snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  getExpenceByCatId(id){
    return this.db.collection("users").doc(this.auth.uid).collection("expence",ref=>ref.where("category","==",id)).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  // getExpenceBetweenDate(startdate,enddate){
  //   return this.db.collection("users").doc(this.auth.uid).collection("expence",ref=>ref.where("timestap",">=",startdate).where("timestap","<=",enddate)).snapshotChanges().pipe(
  //     map(actions => actions.map(a => {
  //       const data = a.payload.doc.data() as any;
  //       const id = a.payload.doc.id;
  //       return { id, ...data };
  //     }))
  //   );
  // }

  updateExpence(id,updatedExpence){
    return this.db.collection("users").doc(this.auth.uid).collection("expence").doc(id).update(Object.assign({},updatedExpence))
  }

  getExpenceByDocId(id){
    return this.db.collection("users").doc(this.auth.uid).collection("expence").valueChanges()
  }

  

}
