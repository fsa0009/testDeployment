import { HttpClient } from "@angular/common/http";
import { Component, Injectable, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFireDatabase , AngularFireList } from "@angular/fire/compat/database";
//import { Observable } from "@firebase/util";
import { map , Observable } from "rxjs";
import { AuthService } from "src/app/shared/services/auth.service";
import { DashboardComponent } from "../dashboard/dashboard.component";



@Injectable()
@Component({
    selector: 'app-other-items',
    templateUrl: 'other-items.component.html',
    //styleUrls :["other-items.component.css"]
    
})

export class OtherItemsComponent implements OnInit  {

    printingUID= DashboardComponent.something; 

    fullURL = 'non-pantry-items/' + this.printingUID ; 

    //fullURL = 'pantry-items/' + this.printingUID ; 

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

/*
import { HttpClient } from "@angular/common/http";
import { Component, Injectable, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFireDatabase , AngularFireList } from "@angular/fire/compat/database";
import { Observable } from "rxjs";
import { AuthService } from "src/app/shared/services/auth.service";
import { DashboardComponent } from "../dashboard/dashboard.component";



@Injectable()
@Component({
    selector: 'app-other-items',
    templateUrl: 'other-items.component.html',
    
})

export class OtherItemsComponent implements OnInit  {

    printingUID= DashboardComponent.something; 

    var1 : AngularFireList<any> | undefined  ; 
    var2: Observable<any[]> | undefined ; 
   


     
    constructor(public http:HttpClient ,public authService: AuthService  , public afAuth: AngularFireAuth  , private db : AngularFireDatabase){
       




    }





    ngOnInit(): void {


        this.var1 = this.db.list('non-pantry-items/hssCbL19HsUy9knIvuKuGosG31j1/-NFmN_DlpaYX9XE6HZpj'); 
        this.var2 = this.var1.valueChanges(); 
        console.log(this.var2); 

    console.log("sending get request to the server");
    console.log(DashboardComponent.something);
    //throw new Error("Method not implemented.");
}
}

*/