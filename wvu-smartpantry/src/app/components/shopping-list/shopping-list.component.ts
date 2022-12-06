import { HttpClient } from "@angular/common/http";
import { Component, Injectable, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFireDatabase } from "@angular/fire/compat/database";
import { Observable, map } from "rxjs";
import { AuthService } from "src/app/shared/services/auth.service";
import { DashboardComponent } from "../dashboard/dashboard.component";



@Injectable()
@Component({
    selector: 'app-shopping-list',
    templateUrl: 'shopping-list.component.html',
    
})

export class ShoppingListComponent implements OnInit  {

    printingUID= DashboardComponent.something; 

    //fullURL = 'test-other-items/' + this.printingUID ; 

    fullURL = 'shopping-list/' + this.printingUID ; 

    myItem : any ; 

    item : any ; 



     
    constructor(public http:HttpClient ,public authService: AuthService  , public afAuth: AngularFireAuth  , private db : AngularFireDatabase ){






    }

    getAll(): Observable<any>{
        return this.db.list<any>(this.fullURL)
        .snapshotChanges()
        .pipe(
            map(X =>X.map((y:any) => ({...y.payload.val() , id: y.payload.key}) ))

        );
        
        }





    ngOnInit(): void {

        this.getAll().subscribe(p => this.item = p)

    console.log(DashboardComponent.something);

}







}