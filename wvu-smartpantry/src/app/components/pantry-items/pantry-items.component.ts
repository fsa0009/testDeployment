
import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable, map } from 'rxjs';
import { AuthService } from '../../shared/services/auth.service';
import { DashboardComponent } from '../dashboard/dashboard.component';


@Component({
  selector: 'app-pantry-items',
  templateUrl: './pantry-items.component.html'
  //styleUrls: ['./app.component.css']
})
export class PantryItemsComponent implements OnInit {


  
  printingUID= DashboardComponent.something; 

  remainingColor = "red"; 

  percentage =  0


  //fullURL = 'test-other-items/' + this.printingUID ; 

  fullURL = 'pantry-items/' + this.printingUID ; 

  myItem : any ; 

  item : any ; 

  testy :any; 



   
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











  const dateStr = '2022-12-14';

  const date = new Date(dateStr);
console.log(date); // 👉️ Wed Jun 22 2022
const faham = date.toUTCString() ; 
console.log("this is faham " + faham) ;
const timestampInMs = date.getTime();

const unixTimestamp = Math.floor(date.getTime() / 1000);
console.log(unixTimestamp + " this is unix"); // 👉️ 1655856000

}







}

