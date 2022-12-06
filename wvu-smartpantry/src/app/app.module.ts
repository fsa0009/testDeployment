import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';

// components
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

// routing
import { AppRoutingModule } from './app-routing.module';

// service
import { AuthService } from './shared/services/auth.service';
import { NavBarComponent } from './components/nav-bar/nav-var.component';
import { PantryItemsComponent } from './components/pantry-items/pantry-items.component';
import { DummyComponent } from './components/pantry-items/dummy.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { OtherItemsComponent } from './components/other-items/other-items.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { MyRecipesComponent } from './components/my-recipes/my-recipes.component';
import { TopNavBarComponent } from './components/top-navbar/top-navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    NavBarComponent, 
    PantryItemsComponent, 
    DummyComponent, 
    OtherItemsComponent,
    ShoppingListComponent, 
    MyRecipesComponent,
    TopNavBarComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AppRoutingModule,
    HttpClientModule, 
    
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})

export class AppModule {}