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

      this.getAll().subscribe(p => this.recipe = p);

      this.allRecipes = this.getAll().subscribe(p => this.recipe = p);

      console.log(this.allRecipes[1][1] + "lasty");



      

  console.log(DashboardComponent.something);

}
}


/*

    <div class="cards border border-dark border-2 me-4 mb-5" *ngFor="let data of recipe ; " style="width: 24rem;">
      <img src="{{data.G_ImagePath}}" class="card-img-top" alt="..." style="height:350px ; width:378px; ">
      <div class="card-body justify-content-center">
        <h3 class="card-num text-center fw-bold">{{data.A_RecipeName}}</h3>
        <p class="card-title text-center"> Calories: {{data.D_Calories}} Cal</p>
        <p class="card-title text-center"> Coocking Time: {{data.C_CookingTime}} mins</p>
        <p class="card-title text-center"> Servings: {{data.E_Servings}} servings</p>

        <a href="#" class="visually-hidden-focusable stretched-link text-center">mk</a>


        <div class="d-grid gap-2">
          <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#firstR">
            View Recipe
          </button>

        </div>
      </div>
    </div>

*/