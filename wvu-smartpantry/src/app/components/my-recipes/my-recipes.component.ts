import { HttpClient } from "@angular/common/http";
import { Component, Injectable, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFireDatabase , AngularFireList } from "@angular/fire/compat/database";
import { AuthService } from "src/app/shared/services/auth.service";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { getDatabase , ref, push, set , onValue } from "firebase/database";

import {  query, orderByChild } from "firebase/database";
import { getAuth } from "firebase/auth";
import { map, Observable } from "rxjs";

@Injectable()
@Component({
    selector: 'app-my-recipes',
    templateUrl: 'my-recipes.component.html',
    styleUrls: ["my-recipes.component.css"],
    
})

export class MyRecipesComponent implements OnInit  {

    printingUID = DashboardComponent.something; 
    branchURL = '/recipes/global/' ;
    recipeNum = 1; 
    //fullURL =  this.branchURL + this.recipeNum. toString() + "//" + this.printingUID ; 
    fullURL =  this.branchURL ; 
    recipe : any ; 
    allRecipes: any ;  
     
    constructor(public http:HttpClient ,public authService: AuthService  , public afAuth: AngularFireAuth , private db : AngularFireDatabase  ){

       console.log(this.fullURL);
    }
    getAll(): Observable<any>{
      return this.db.list<any>(this.fullURL)
      .snapshotChanges()
      .pipe(
          map(X =>X.map((y:any) => ({...y.payload.val() , id: y.payload.key}) ))

      );
      
      }

  ngOnInit(): void {
    
    console.log(this.db.list('recipes'));

      this.getAll().subscribe(p => this.recipe = p)

  console.log(DashboardComponent.something);

}
}
