import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

// route guard
import { AuthGuard } from './shared/guard/auth.guard';
import { PantryItemsComponent } from './components/pantry-items/pantry-items.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { OtherItemsComponent } from './components/other-items/other-items.component';
import { MyRecipesComponent } from './components/my-recipes/my-recipes.component';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },

  { path: 'pantry-items', component: PantryItemsComponent, canActivate: [AuthGuard]  },
  { path: 'shopping-list', component: ShoppingListComponent, canActivate: [AuthGuard]  },
  { path: 'other-items', component: OtherItemsComponent, canActivate: [AuthGuard]  },
  { path: 'my-recipes', component: MyRecipesComponent, canActivate: [AuthGuard]  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}