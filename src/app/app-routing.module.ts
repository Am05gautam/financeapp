import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { ForgetPswdComponent } from './auth/forget-pswd/forget-pswd.component';
import { ManageExpComponent } from './home/manage-exp/manage-exp.component';
import { ManageCatComponent } from './home/manage-cat/manage-cat.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';


const routes: Routes = [
  {path:"auth",
  component:AuthComponent,
  children:[
    {path:"",component:SignUpComponent},
    {path:"sign-in",component:SignInComponent},
    {path:"sign-up",component:SignUpComponent},
    {path:"forget-pswd",component:ForgetPswdComponent},
  ]},
  {path:"home",component:HomeComponent,children:[
    {path:"",component:DashboardComponent},
    {path:"manage-exp",component:ManageExpComponent},
    {path:"manage-cat",component:ManageCatComponent}
  ]},
  {path:"navbar",component:NavbarComponent},
  { path: '',  redirectTo: '/auth', pathMatch: 'full', },
  {path:"**",component:AuthComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
