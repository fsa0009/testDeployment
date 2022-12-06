import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { HttpClient } from "@angular/common/http";
import { Injectable,  } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { UserInfo } from "./user-info.model";

//import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html'
  //styleUrls: ['./app.component.css']
})
export class NavBarComponent implements OnInit {


  baseURL: string; 
  childURL : string; 

  myInfo: UserInfo | undefined ; 
    userData: any; // Save logged in user data
    printingUID = DashboardComponent.something; 

    fullURL = 'https://smartfridgeapp-wvu-default-rtdb.firebaseio.com/' + 'my-info/' + this.printingUID ; 





    constructor(public http:HttpClient ,public authService: AuthService  , public afAuth: AngularFireAuth ) {
      this.baseURL = 'https://smartfridgeapp-wvu-default-rtdb.firebaseio.com/' ; 
      this.childURL = 'pantry-items/'; 

    }
  
    ngOnInit(  ): void {
        
        
      console.log("sending get request to the server");
      this.getUserInfo();
      console.log("Showing User Info");
      this.showUserInfo();
  }

  getUserInfo(){



      console.log("im here" + " " + this.printingUID);

      return this.http.get<UserInfo >(this.fullURL) ;
  }

  showUserInfo(){
      this.getUserInfo().subscribe((data:UserInfo) => { 
          //console.log("Subscribing to get method");
          console.log(data);
          this.myInfo = data ; 

  })
  }
}