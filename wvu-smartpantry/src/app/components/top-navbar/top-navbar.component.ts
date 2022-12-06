

import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable, map } from 'rxjs';


import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { HttpClient } from "@angular/common/http";
import { Injectable,  } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { DashboardComponent } from "../dashboard/dashboard.component";


@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ["top-navbar.component.css"],
})
export class TopNavBarComponent implements OnInit {

 


 
  printingUID= DashboardComponent.something; 

  fullURL = 'my-info/' + this.printingUID ; 

  myColor = "green"; 

  //fullURL = 'pantry-items/' + this.printingUID ; 

  myItem : any ; 

  item : any ; 

  myName :any; 


  userData: any; // Save logged in user data





    constructor(public http:HttpClient ,public authService: AuthService  , public afAuth: AngularFireAuth  , private db : AngularFireDatabase) {
      this.myName= '' ; 
    
    }
  

    ngOnInit(  ): void {
        
        
      console.log("sending get request to the server");
      this.getUserInfo();
      console.log("Showing User Info");
      this.showUserInfo();
  }

  getUserInfo(){



      console.log("im here" + " " + this.printingUID);

      return this.http.get<string>('https://smartfridgeapp-wvu-default-rtdb.firebaseio.com/my-info/'+ this.printingUID + '/Name'+ '.json') ;
  }

  showUserInfo(){
      this.getUserInfo().subscribe((data:string) => { 
          //console.log("Subscribing to get method");
          console.log(data);
          this.myName = data ; 

  })
  }
}