import { HttpClient } from '@angular/common/http';
import { Component, Injectable, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as firebase from 'firebase/compat';
import { AuthService } from '../../shared/services/auth.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})

export class GlobalService implements OnInit {

  baseURL: string; 
  childURL : string; 
  userData: any; // Save logged in user data
  public static something :string; 

  constructor(public authService: AuthService  , public afAuth: AngularFireAuth ) {
    this.baseURL = 'https://smartfridgeapp-wvu-default-rtdb.firebaseio.com/' ; 
    this.childURL = '/pantry-items/4cS4jkHhubh6ZjcZ4hMCtxuRGqb2/-NFqRnti5ZyFIpBCW_yx.json';
    //GlobalService.something = "" ;

    /* Saving user data in localstorage when 
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        GlobalService.something = user.uid;
        console.log(GlobalService.something);
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });

  }

  ngOnInit(): void {
    //console.log(this.something);
  }
}