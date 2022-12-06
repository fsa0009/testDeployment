import { HttpClient } from "@angular/common/http";
import { Component, Injectable, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AuthService } from "src/app/shared/services/auth.service";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { UserInfo } from "./user-info.model";


@Injectable()
@Component({
    selector: 'app-dummy',
    templateUrl: 'dummy.component.html',
    
})

export class DummyComponent implements OnInit  {
    myInfo: UserInfo | undefined ; 
    userData: any; // Save logged in user data
    printingUID = DashboardComponent.something; 

    public static myName :string;

    constructor(public http:HttpClient ,public authService: AuthService  , public afAuth: AngularFireAuth ){

    }
    ngOnInit(  ): void {
        
        
        console.log("sending get request to the server");
        this.getUserInfo();
        console.log("Showing User Info");
        this.showUserInfo();
    }

    getUserInfo(){



        console.log("im here" + " " + this.printingUID);

        return this.http.get<UserInfo >('https://smartfridgeapp-wvu-default-rtdb.firebaseio.com/my-info/'+ this.printingUID + '.json') ;
    }

    showUserInfo(){
        this.getUserInfo().subscribe((data:UserInfo) => { 
            //console.log("Subscribing to get method");
            console.log(data);
            this.myInfo = data ; 

    })
    }
}